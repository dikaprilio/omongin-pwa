'use server';

import { google } from 'googleapis';

// Reuse the same getSheetsClient pattern from sheets.ts
async function getSheetsClient() {
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
        throw new Error('Missing Google Sheets API credentials');
    }

    const auth = new google.auth.JWT({
        email: clientEmail,
        key: privateKey.replace(/\\n/g, '\n'),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    return { sheets: google.sheets({ version: 'v4', auth }), spreadsheetId };
}

function formatCurrency(value: number | null): string {
    if (value === null) return '';
    return value.toLocaleString('id-ID', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

// Sheet configuration — same sheet as orders (DATA STUDENT ECC)
const SHEET_RANGE = 'A4:N';

export interface RegistrationData {
    namaLengkap: string;
    namaPanggilan: string;
    asalKampus: string;
    domisili: string;
    usia: number;
    package: string;
    totalSessions: number;
    totalPayment: number;
    levelBahasa: string;
    skillImprove: string[];
    frekuensiBelajar: string;
    jenisKegiatan: string[];
    waktuNyaman: string;
    sessionType: string;
    groupId?: string;
    members?: {
        namaLengkap: string;
        asalKampus: string;
        domisili: string;
        usia: number;
    }[];
}

type Member = NonNullable<RegistrationData['members']>[number];

function buildRow(data: RegistrationData, isMain: boolean, member?: Member): string[] {
    return [
        data.sessionType || 'Private',
        isMain ? data.namaLengkap.trim() : member!.namaLengkap.trim(),
        (isMain ? data.usia : member!.usia).toString(),
        isMain ? data.asalKampus.trim() : member!.asalKampus.trim(),
        isMain ? data.domisili.trim() : member!.domisili.trim(),
        data.package.trim(),
        data.totalSessions.toString(),
        data.totalSessions.toString(), // remainingSessions = totalSessions (new student)
        formatCurrency(data.totalPayment),
        'Not Done', // paymentStatus — new registration
        'NEW', // metodePayment
        '', // assignedTo — to be assigned later by admin
        data.sessionType || 'Private', // SessionType column M
        data.groupId || '', // GroupID column N
    ];
}

/**
 * Appends a registration to the DATA STUDENT ECC sheet.
 * Maps registration fields to existing spreadsheet columns:
 * A: Date, B: Name, C: Age, D: Job/Kampus, E: Location/Domisili,
 * F: Package, G: TotalSessions, H: RemainingSessions, I: TotalPayment,
 * J: PaymentStatus, K: MetodePayment, L: AssignedTo, M: SessionType, N: GroupID
 */
export async function appendRegistration(data: RegistrationData) {
    const { sheets, spreadsheetId } = await getSheetsClient();

    // Jakarta timezone (WIB UTC+7)
    const now = new Date();
    const jakartaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    const year = jakartaTime.getFullYear();
    const month = String(jakartaTime.getMonth() + 1).padStart(2, '0');
    const day = String(jakartaTime.getDate()).padStart(2, '0');
    const hours = String(jakartaTime.getHours()).padStart(2, '0');
    const minutes = String(jakartaTime.getMinutes()).padStart(2, '0');
    const seconds = String(jakartaTime.getSeconds()).padStart(2, '0');
    const dateTimeStr = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

    // Build rows: 1 for main registrant + 1 for each member
    const rows: string[][] = [];
    const mainRow = buildRow(data, true);
    mainRow[0] = dateTimeStr; // Set date in column A
    rows.push(mainRow);

    if (data.members && data.members.length > 0) {
        data.members.forEach((member) => {
            const memberRow = buildRow(data, false, member);
            memberRow[0] = dateTimeStr;
            rows.push(memberRow);
        });
    }

    try {
        // Get current data to find the first empty row
        const currentData = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: SHEET_RANGE,
        });

        const existingRows = currentData.data.values || [];

        // Find the first empty row (where name column B is empty)
        let targetRowIndex = existingRows.length;
        for (let i = 0; i < existingRows.length; i++) {
            if (!existingRows[i][1]?.trim()) {
                targetRowIndex = i;
                break;
            }
        }

        const sheetRowNumber = 4 + targetRowIndex;
        const targetRange = `A${sheetRowNumber}:N${sheetRowNumber + rows.length - 1}`;

        // Write all rows at once
        await sheets.spreadsheets.values.update({
            spreadsheetId,
            range: targetRange,
            valueInputOption: 'RAW',
            requestBody: {
                values: rows,
            },
        });

        // Copy formatting from row above if possible (only for the first row written)
        if (sheetRowNumber > 4) {
            try {
                const sheetInfo = await sheets.spreadsheets.get({ spreadsheetId });
                const sheet = sheetInfo.data.sheets?.[0];
                const sheetId = sheet?.properties?.sheetId;

                if (sheetId !== undefined) {
                    const requests: any[] = [];
                    for (let i = 0; i < rows.length; i++) {
                        requests.push(
                            {
                                copyPaste: {
                                    source: {
                                        sheetId,
                                        startRowIndex: sheetRowNumber - 2,
                                        endRowIndex: sheetRowNumber - 1,
                                        startColumnIndex: 0,
                                        endColumnIndex: 14,
                                    },
                                    destination: {
                                        sheetId,
                                        startRowIndex: sheetRowNumber - 1 + i,
                                        endRowIndex: sheetRowNumber + i,
                                        startColumnIndex: 0,
                                        endColumnIndex: 14,
                                    },
                                    pasteType: 'PASTE_FORMAT',
                                    pasteOrientation: 'NORMAL',
                                },
                            },
                            {
                                copyPaste: {
                                    source: {
                                        sheetId,
                                        startRowIndex: sheetRowNumber - 2,
                                        endRowIndex: sheetRowNumber - 1,
                                        startColumnIndex: 0,
                                        endColumnIndex: 14,
                                    },
                                    destination: {
                                        sheetId,
                                        startRowIndex: sheetRowNumber - 1 + i,
                                        endRowIndex: sheetRowNumber + i,
                                        startColumnIndex: 0,
                                        endColumnIndex: 14,
                                    },
                                    pasteType: 'PASTE_DATA_VALIDATION',
                                    pasteOrientation: 'NORMAL',
                                },
                            }
                        );
                    }

                    await sheets.spreadsheets.batchUpdate({
                        spreadsheetId,
                        requestBody: { requests },
                    });
                }
            } catch (formatError) {
                console.warn('Could not copy formatting to new row:', formatError);
            }
        }

        return { success: true, rowIndex: targetRowIndex };
    } catch (error) {
        console.error('Error appending registration to Google Sheets:', error);
        throw error;
    }
}
