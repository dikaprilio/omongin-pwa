import { google } from 'googleapis';
import { fetchOrders } from './sheets';

// Sheet configuration - Scheduler sheet
const JADWAL_TAB_NAME = 'Jadwal';
const JADWAL_RANGE = 'A2:G'; // Data starts at row 2, columns A-G
const JADWAL_HEADERS = ['Tanggal', 'Waktu', 'Siswa', 'Tutor', 'Paket', 'Status', 'Catatan'];

const TUTOR_SHEET_PREFIX = 'Jadwal '; // Space instead of underscore

// Full Schedule interface (as stored in sheet)
export interface Schedule {
  rowIndex: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  studentName: string;
  tutor: string;
  package: string;
  sessionType: 'Online' | 'Offline' | '';
  location: string;
  status: 'Scheduled' | 'Done' | 'Cancelled' | 'Rescheduled' | '';
  notes: string;
}

// For creating new schedules - optional fields have defaults
export interface CreateScheduleInput {
  date: string;
  time: string;
  studentName: string;
  tutor: string;
  package: string;
  sessionType?: 'Online' | 'Offline' | '';
  location?: string;
  status: 'Scheduled' | 'Done' | 'Cancelled' | 'Rescheduled' | '';
  notes?: string;
}

// Valid package options for dropdown
const PACKAGE_OPTIONS = [
  'Speaking Adults',
  'Speaking Kids',
  'Basic Adults',
  'Basic Kids',
  'Presentation',
  'Interview',
  'Grammar',
  'IELTS',
  'TOEFL'
];

// Valid status options for dropdown
const STATUS_OPTIONS = ['Scheduled', 'Done', 'Cancelled', 'Rescheduled'];

// ===== AUTHENTICATION =====

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

// ===== HELPER FUNCTIONS =====

function formatDateForDisplay(dateStr: string): string {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  return `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
}

function parseDateFromSheet(dateRaw: string): string {
  if (!dateRaw) return '';
  const parts = dateRaw.split(/[\/\-]/);
  if (parts.length === 3) {
    // Handle both DD/MM/YYYY and YYYY-MM-DD
    if (parts[0].length === 4) {
      // Already YYYY-MM-DD
      return `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
    } else {
      // DD/MM/YYYY
      return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
    }
  }
  return '';
}

function scheduleToRow(schedule: CreateScheduleInput): string[] {
  return [
    formatDateForDisplay(schedule.date), // DD/MM/YYYY format
    schedule.time, // HH:MM format
    schedule.studentName,
    schedule.tutor,
    schedule.package,
    schedule.status,
    schedule.notes ?? '',
  ];
}

// Helper to format date column (DD/MM/YYYY)
function formatDateCell(
  sheetId: number,
  rowIndex: number
): object {
  const actualRow = rowIndex + 2;
  return {
    repeatCell: {
      range: {
        sheetId: sheetId,
        startRowIndex: actualRow - 1,
        endRowIndex: actualRow,
        startColumnIndex: 0, // Tanggal column only
        endColumnIndex: 1,
      },
      cell: {
        userEnteredFormat: {
          numberFormat: {
            type: 'DATE',
            pattern: 'dd/mm/yyyy',
          },
        },
      },
      fields: 'userEnteredFormat.numberFormat',
    },
  };
}

// Helper to format time column (HH:MM - no seconds)
function formatTimeCell(
  sheetId: number,
  rowIndex: number
): object {
  const actualRow = rowIndex + 2;
  return {
    repeatCell: {
      range: {
        sheetId: sheetId,
        startRowIndex: actualRow - 1,
        endRowIndex: actualRow,
        startColumnIndex: 1, // Waktu column only
        endColumnIndex: 2,
      },
      cell: {
        userEnteredFormat: {
          numberFormat: {
            type: 'DATE_TIME', // Use DATE_TIME type for custom time format
            pattern: 'HH:mm',   // 24-hour format, no seconds
          },
        },
      },
      fields: 'userEnteredFormat.numberFormat',
    },
  };
}

// Helper to clear formatting and set white background
function formatCellStyle(
  sheetId: number,
  rowIndex: number
): object[] {
  const actualRow = rowIndex + 2;
  return [
    // First, clear any existing background/conditional formatting
    {
      updateCells: {
        range: {
          sheetId: sheetId,
          startRowIndex: actualRow - 1,
          endRowIndex: actualRow,
          startColumnIndex: 0,
          endColumnIndex: 7,
        },
        fields: 'userEnteredFormat.backgroundColor',
        rows: [{
          values: Array(7).fill({
            userEnteredFormat: {
              backgroundColor: { red: 1, green: 1, blue: 1 },
            },
          }),
        }],
      },
    },
    // Then set text color and alignment
    {
      repeatCell: {
        range: {
          sheetId: sheetId,
          startRowIndex: actualRow - 1,
          endRowIndex: actualRow,
          startColumnIndex: 0,
          endColumnIndex: 7,
        },
        cell: {
          userEnteredFormat: {
            backgroundColor: { red: 1, green: 1, blue: 1 },
            textFormat: {
              foregroundColor: { red: 0.2, green: 0.2, blue: 0.2 },
            },
            verticalAlignment: 'MIDDLE',
          },
        },
        fields: 'userEnteredFormat(backgroundColor,textFormat,verticalAlignment)',
      },
    },
  ];
}

// ===== STUDENT DATA =====

export async function fetchStudentNames(): Promise<string[]> {
  try {
    const orders = await fetchOrders();
    return [...new Set(orders.map(o => o.name).filter(Boolean))].sort();
  } catch (error) {
    console.error('Error fetching student names:', error);
    return [];
  }
}

export async function getStudentRemainingSessions(studentName: string): Promise<number | null> {
  try {
    const orders = await fetchOrders();
    const order = orders.find(o => o.name === studentName);
    return order?.remainingSessions ?? null;
  } catch {
    return null;
  }
}

// ===== READ OPERATIONS =====

// Helper: Ensure main Jadwal sheet has headers
async function ensureMainSheetHeaders(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string
): Promise<void> {
  try {
    // Check if headers exist
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${JADWAL_TAB_NAME}!A1:G1`,
    });

    const headers = response.data.values?.[0];
    if (!headers || headers[0] !== 'Tanggal') {
      // Headers missing, add them
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${JADWAL_TAB_NAME}!A1:G1`,
        valueInputOption: 'RAW',
        requestBody: { values: [JADWAL_HEADERS] },
      });
      console.log('[Scheduler] Added headers to main Jadwal sheet');
    }
  } catch (error) {
    console.warn('[Scheduler] Could not ensure headers:', error);
  }
}

// Helper: Parse date string for sorting (YYYY-MM-DD format)
function parseDateForSort(dateStr: string): number {
  if (!dateStr) return 0;
  const parts = dateStr.split('-');
  if (parts.length !== 3) return 0;
  // Create a sortable number: YYYYMMDD
  return parseInt(parts[0]) * 10000 + parseInt(parts[1]) * 100 + parseInt(parts[2]);
}

// Helper: Parse time string for sorting (HH:MM format)
function parseTimeForSort(timeStr: string): number {
  if (!timeStr) return 0;
  const parts = timeStr.match(/^(\d{1,2}):(\d{2})/);
  if (!parts) return 0;
  return parseInt(parts[1]) * 60 + parseInt(parts[2]);
}

export async function fetchSchedules(): Promise<Schedule[]> {
  const { sheets, spreadsheetId } = await getSheetsClient();

  try {
    // Ensure headers exist first
    await ensureMainSheetHeaders(sheets, spreadsheetId);

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${JADWAL_TAB_NAME}!${JADWAL_RANGE}`,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    // Ensure dropdown validation exists (background task)
    ensureMainSheetValidation(sheets, spreadsheetId).catch(() => { });

    const schedules = rows
      .map((row, index): Schedule => ({
        rowIndex: index,
        date: parseDateFromSheet(row[0] || ''),
        time: row[1]?.trim() || '',
        studentName: row[2]?.trim() || '',
        tutor: row[3]?.trim() || '',
        package: row[4]?.trim() || '',
        sessionType: '',
        location: '',
        status: (row[5]?.trim() as Schedule['status']) || '',
        notes: row[6]?.trim() || '',
      }))
      .filter(schedule => schedule.studentName !== '');

    // Sort by date (ascending) and then by time (ascending)
    schedules.sort((a, b) => {
      const dateCompare = parseDateForSort(a.date) - parseDateForSort(b.date);
      if (dateCompare !== 0) return dateCompare;
      return parseTimeForSort(a.time) - parseTimeForSort(b.time);
    });

    // Reassign rowIndex after sorting to match the actual sheet row positions
    // Note: rowIndex should reflect the original sheet position for updates
    // So we need to fetch the raw data again or track original indices
    // For now, we return sorted but keep original rowIndex for update operations

    return schedules;
  } catch (error) {
    console.error('Error fetching schedules:', error);
    throw error;
  }
}

// ===== SHEET SORTING =====

// Helper: Sort the entire Jadwal sheet by date (col A) then time (col B)
async function sortJadwalSheet(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string
): Promise<void> {
  try {
    // Get sheet ID
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = spreadsheet.data.sheets?.find(
      s => s.properties?.title === JADWAL_TAB_NAME
    );
    const sheetId = sheet?.properties?.sheetId;

    if (sheetId === undefined) return;

    // Get current data to find the last row with data
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${JADWAL_TAB_NAME}!A2:G`,
    });

    const rows = response.data.values || [];
    if (rows.length <= 1) return; // Nothing to sort

    // Find last row with actual data
    let lastDataRow = rows.length;
    for (let i = rows.length - 1; i >= 0; i--) {
      if (rows[i][0] || rows[i][1] || rows[i][2]) {
        lastDataRow = i + 1; // 1-based
        break;
      }
    }

    if (lastDataRow <= 1) return;

    // Sort by column A (date) then column B (time)
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            sortRange: {
              range: {
                sheetId: sheetId,
                startRowIndex: 1, // Skip header (row 1, 0-indexed)
                endRowIndex: 1 + lastDataRow,
                startColumnIndex: 0,
                endColumnIndex: 7,
              },
              sortSpecs: [
                { dimensionIndex: 0, sortOrder: 'ASCENDING' }, // Date column
                { dimensionIndex: 1, sortOrder: 'ASCENDING' }, // Time column
              ],
            },
          },
        ],
      },
    });

    console.log('[Scheduler] Sheet sorted successfully');
  } catch (error) {
    console.error('[Scheduler] Failed to sort sheet:', error);
    // Don't throw - sorting is non-critical
  }
}

// ===== CREATE OPERATIONS =====

export async function createSchedule(input: CreateScheduleInput): Promise<Schedule> {
  const { sheets, spreadsheetId } = await getSheetsClient();

  const row = scheduleToRow(input);

  try {
    // Simple append - let Google Sheets add at the end
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${JADWAL_TAB_NAME}!${JADWAL_RANGE}`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: [row] },
    });

    // Sort the sheet after adding
    await sortJadwalSheet(sheets, spreadsheetId);

    // Get the actual row index from response
    const updatedRange = response.data.updates?.updatedRange;
    let rowIndex = 0;
    if (updatedRange) {
      const match = updatedRange.match(/:(\d+)$/);
      if (match) {
        rowIndex = parseInt(match[1]) - 2; // Convert to 0-based index (row 2 = index 0)
      }
    }

    // Return full Schedule with defaults applied
    return {
      ...input,
      sessionType: input.sessionType || '',
      location: input.location || '',
      notes: input.notes || '',
      rowIndex
    };
  } catch (error) {
    console.error('Error creating schedule:', error);
    throw error;
  }
}

export async function createSchedules(
  inputs: CreateScheduleInput[]
): Promise<Schedule[]> {
  if (inputs.length === 0) return [];

  const { sheets, spreadsheetId } = await getSheetsClient();

  const rows = inputs.map(scheduleToRow);

  try {
    // Batch append - single API call for multiple rows
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${JADWAL_TAB_NAME}!${JADWAL_RANGE}`,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: { values: rows },
    });

    // Sort the sheet after adding all rows
    await sortJadwalSheet(sheets, spreadsheetId);

    // Get starting row index
    const updatedRange = response.data.updates?.updatedRange;
    let baseRowIndex = 0;
    if (updatedRange) {
      const match = updatedRange.match(/:(\d+)$/);
      if (match) {
        baseRowIndex = parseInt(match[1]) - rows.length - 1; // First new row index
      }
    }

    // Return full Schedules with defaults applied
    return inputs.map((input, i) => ({
      ...input,
      sessionType: input.sessionType || '',
      location: input.location || '',
      notes: input.notes || '',
      rowIndex: baseRowIndex + i
    }));
  } catch (error) {
    console.error('Error batch creating schedules:', error);
    throw error;
  }
}

// ===== UPDATE OPERATIONS =====

export async function updateSchedule(
  rowIndex: number,
  updates: Partial<Omit<Schedule, 'rowIndex'>>
): Promise<Schedule> {
  const { sheets, spreadsheetId } = await getSheetsClient();

  // Fetch current to merge updates
  const current = await fetchSchedules();
  const existing = current.find(s => s.rowIndex === rowIndex);
  if (!existing) throw new Error('Schedule not found');

  const updated = { ...existing, ...updates };
  const row = scheduleToRow(updated);

  const sheetRow = 2 + rowIndex;
  const range = `${JADWAL_TAB_NAME}!A${sheetRow}:G${sheetRow}`;

  try {
    // Update only the specific row - no clearing of other data
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: { values: [row] },
    });

    return updated;
  } catch (error) {
    console.error('Error updating schedule:', error);
    throw error;
  }
}

// Batch update multiple schedules efficiently
export async function updateSchedules(
  updates: { rowIndex: number; data: Partial<Omit<Schedule, 'rowIndex'>> }[]
): Promise<Schedule[]> {
  if (updates.length === 0) return [];

  const { sheets, spreadsheetId } = await getSheetsClient();
  const current = await fetchSchedules();

  // Build batch update values
  const dataUpdates = updates.map(({ rowIndex, data }) => {
    const existing = current.find(s => s.rowIndex === rowIndex);
    if (!existing) return null;

    const updated = { ...existing, ...data };
    const sheetRow = 2 + rowIndex;
    return {
      range: `${JADWAL_TAB_NAME}!A${sheetRow}:G${sheetRow}`,
      values: [scheduleToRow(updated)],
    };
  }).filter(Boolean) as { range: string; values: string[][] }[];

  if (dataUpdates.length === 0) return [];

  try {
    // Use batchUpdate for multiple rows in one API call
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId,
      requestBody: {
        valueInputOption: 'RAW',
        data: dataUpdates,
      },
    });

    return updates.map(({ rowIndex, data }) => {
      const existing = current.find(s => s.rowIndex === rowIndex)!;
      return { ...existing, ...data, rowIndex };
    });
  } catch (error) {
    console.error('Error batch updating schedules:', error);
    throw error;
  }
}

// ===== DELETE OPERATIONS =====

export async function deleteSchedule(rowIndex: number): Promise<void> {
  const { sheets, spreadsheetId } = await getSheetsClient();
  const sheetRow = 2 + rowIndex;

  try {
    // Clear only the specific row - don't shift other rows
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range: `${JADWAL_TAB_NAME}!A${sheetRow}:G${sheetRow}`,
    });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    throw error;
  }
}

// ===== FORMATTING HELPERS =====

async function copyRowFormatting(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string,
  rowIndex: number
) {
  if (rowIndex === 0) return;

  try {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = spreadsheet.data.sheets?.find(
      s => s.properties?.title === JADWAL_TAB_NAME
    );
    const sheetId = sheet?.properties?.sheetId;

    if (sheetId === undefined) return;

    const newRow = 2 + rowIndex;
    const prevRow = newRow - 1;

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            copyPaste: {
              source: {
                sheetId,
                startRowIndex: prevRow - 1,
                endRowIndex: prevRow,
                startColumnIndex: 0,
                endColumnIndex: 7,
              },
              destination: {
                sheetId,
                startRowIndex: newRow - 1,
                endRowIndex: newRow,
                startColumnIndex: 0,
                endColumnIndex: 7,
              },
              pasteType: 'PASTE_FORMAT',
              pasteOrientation: 'NORMAL',
            },
          },
        ],
      },
    });
  } catch (e) {
    console.warn('Could not copy formatting:', e);
  }
}

async function copyRowsFormatting(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string,
  startRowIndex: number,
  count: number
) {
  if (startRowIndex === 0 || count === 0) return;

  try {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = spreadsheet.data.sheets?.find(
      s => s.properties?.title === JADWAL_TAB_NAME
    );
    const sheetId = sheet?.properties?.sheetId;

    if (sheetId === undefined) return;

    const startRow = 2 + startRowIndex;
    const endRow = startRow + count;
    const templateRow = startRow - 1;

    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            copyPaste: {
              source: {
                sheetId,
                startRowIndex: templateRow - 1,
                endRowIndex: templateRow,
                startColumnIndex: 0,
                endColumnIndex: 7,
              },
              destination: {
                sheetId,
                startRowIndex: startRow - 1,
                endRowIndex: endRow,
                startColumnIndex: 0,
                endColumnIndex: 7,
              },
              pasteType: 'PASTE_FORMAT',
              pasteOrientation: 'NORMAL',
            },
          },
        ],
      },
    });
  } catch (e) {
    console.warn('Could not copy formatting:', e);
  }
}

// ===== SYNC TO TUTOR SHEETS (FULL REFRESH) =====

export async function syncSessionsToTutorSheets(): Promise<{
  synced: number;
  tutors: string[];
  errors: string[];
}> {
  const { sheets, spreadsheetId } = await getSheetsClient();

  // 1. Read all schedules from main sheet
  const allSchedules = await fetchSchedules();

  if (allSchedules.length === 0) {
    return { synced: 0, tutors: [], errors: [] };
  }

  // 2. Group by tutor
  const schedulesByTutor: Record<string, Schedule[]> = {};
  for (const schedule of allSchedules) {
    const tutorKey = schedule.tutor || 'Unassigned';
    if (!schedulesByTutor[tutorKey]) {
      schedulesByTutor[tutorKey] = [];
    }
    schedulesByTutor[tutorKey].push(schedule);
  }

  const syncedTutors: string[] = [];
  const errors: string[] = [];
  let totalSynced = 0;

  // 3. Process each tutor sheet - clear and rewrite for simplicity
  for (const [tutorName, tutorSchedules] of Object.entries(schedulesByTutor)) {
    // Dynamically calculate short name using same logic as actions
    let shortName = tutorName.split(' ')[0];
    if (shortName === 'M.' && tutorName.split(' ').length > 1) {
      shortName = tutorName.split(' ')[1];
    }
    const lowerName = tutorName.toLowerCase();
    if (lowerName.includes('zen') || lowerName.includes('arifin')) shortName = 'Zen';
    else if (lowerName.includes('sadaad')) shortName = 'Sadaad';
    else if (lowerName.includes('cyril')) shortName = 'Cyril';
    else if (lowerName.includes('sasna')) shortName = 'Sasna';
    else if (lowerName.includes('nafiis')) shortName = 'Nafiis';
    else if (lowerName.includes('zia')) shortName = 'Zia';
    else if (lowerName.includes('nayla')) shortName = 'Nayla';

    const tabName = `${TUTOR_SHEET_PREFIX}${shortName}`;

    try {
      // Ensure tab exists
      await ensureSheetTab(sheets, spreadsheetId, tabName);

      // Sort schedules by date and time
      const sortedSchedules = [...tutorSchedules].sort((a, b) => {
        const dateCompare = parseDateForSort(a.date) - parseDateForSort(b.date);
        if (dateCompare !== 0) return dateCompare;
        return parseTimeForSort(a.time) - parseTimeForSort(b.time);
      });

      // Prepare all rows
      const rows = sortedSchedules.map(s => [
        formatDateForDisplay(s.date),
        s.time,
        s.studentName,
        tutorName,
        s.package,
        s.status,
        s.notes,
      ]);

      // Clear existing data (except header)
      await sheets.spreadsheets.values.clear({
        spreadsheetId,
        range: `'${tabName}'!A2:G`,
      });

      // Write all data at once
      if (rows.length > 0) {
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: `'${tabName}'!A2:G${1 + rows.length}`,
          valueInputOption: 'RAW',
          requestBody: { values: rows },
        });
      }

      syncedTutors.push(shortName);
      totalSynced += tutorSchedules.length;

    } catch (err) {
      const errMsg = `Failed to sync ${tabName}: ${err instanceof Error ? err.message : String(err)}`;
      console.error(`[Scheduler] ${errMsg}`);
      errors.push(errMsg);
    }
  }

  return { synced: totalSynced, tutors: syncedTutors, errors };
}

// Helper: Create data validation for dropdown
function createDropdownValidation(
  sheetId: number,
  columnIndex: number, // 0-based
  options: string[]
): object {
  return {
    setDataValidation: {
      range: {
        sheetId: sheetId,
        startColumnIndex: columnIndex,
        endColumnIndex: columnIndex + 1,
        startRowIndex: 1, // Skip header row
        endRowIndex: 1000,
      },
      rule: {
        condition: {
          type: 'ONE_OF_LIST',
          values: options.map(option => ({
            userEnteredValue: option
          })),
        },
        showCustomUi: true,
        strict: true, // Require valid value from list
        inputMessage: 'Pilih dari daftar',
      },
    },
  };
}

// Helper: Ensure sheet tab exists
async function ensureSheetTab(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string,
  tabName: string
): Promise<number> {
  try {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const existingSheet = spreadsheet.data.sheets?.find(
      s => s.properties?.title === tabName
    );

    if (existingSheet?.properties?.sheetId !== undefined) {
      return existingSheet.properties.sheetId as number;
    }

    // Create new sheet
    const response = await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          {
            addSheet: {
              properties: {
                title: tabName,
                gridProperties: {
                  rowCount: 1000,
                  columnCount: 7,
                },
              },
            },
          },
        ],
      },
    });

    const newSheetId = response.data.replies?.[0]?.addSheet?.properties?.sheetId;

    if (!newSheetId) {
      throw new Error('Failed to create new sheet');
    }

    // Add headers, formatting, and data validation in parallel
    await Promise.all([
      // Add headers
      sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `'${tabName}'!A1:G1`,
        valueInputOption: 'RAW',
        requestBody: { values: [JADWAL_HEADERS] },
      }),

      // Set default cell style: white background, dark text for all data rows
      sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            {
              repeatCell: {
                range: {
                  sheetId: newSheetId,
                  startRowIndex: 1, // Skip header
                  endRowIndex: 1000,
                  startColumnIndex: 0,
                  endColumnIndex: 7,
                },
                cell: {
                  userEnteredFormat: {
                    backgroundColor: { red: 1, green: 1, blue: 1 }, // White
                    textFormat: {
                      foregroundColor: { red: 0.2, green: 0.2, blue: 0.2 }, // Dark gray
                    },
                    verticalAlignment: 'MIDDLE',
                    padding: { top: 2, right: 4, bottom: 2, left: 4 },
                  },
                },
                fields: 'userEnteredFormat(backgroundColor,textFormat,verticalAlignment,padding)',
              },
            },
          ],
        },
      }),

      // Add dropdown validation for Package column (E = index 4)
      sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            createDropdownValidation(newSheetId, 4, PACKAGE_OPTIONS),
          ],
        },
      }),

      // Add dropdown validation for Status column (F = index 5)
      sheets.spreadsheets.batchUpdate({
        spreadsheetId,
        requestBody: {
          requests: [
            createDropdownValidation(newSheetId, 5, STATUS_OPTIONS),
          ],
        },
      }),
    ]);

    return newSheetId;
  } catch (error) {
    console.error(`Error ensuring sheet tab ${tabName}:`, error);
    throw error;
  }
}

// Helper: Add dropdown validation to main Jadwal sheet (for existing sheets)
async function ensureMainSheetValidation(
  sheets: ReturnType<typeof google.sheets>,
  spreadsheetId: string
): Promise<void> {
  try {
    const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
    const sheet = spreadsheet.data.sheets?.find(
      s => s.properties?.title === JADWAL_TAB_NAME
    );
    const sheetId = sheet?.properties?.sheetId;

    if (sheetId === undefined || sheetId === null) return;

    // Check if validation already exists by trying to get validation info
    // If it fails, we assume validation needs to be added
    await sheets.spreadsheets.batchUpdate({
      spreadsheetId,
      requestBody: {
        requests: [
          createDropdownValidation(sheetId as number, 4, PACKAGE_OPTIONS),
          createDropdownValidation(sheetId as number, 5, STATUS_OPTIONS),
        ],
      },
    });

    console.log('[Scheduler] Added dropdown validation to main Jadwal sheet');
  } catch (error: any) {
    // Silently fail - sheet might not exist, validation might already be there, or it's a typed column (Tables feature)
    if (error?.message?.includes('typed columns')) {
      return;
    }
    console.warn('[Scheduler] Could not add validation to main sheet:', error?.message || error);
  }
}

export function groupSchedulesByDate(schedules: Schedule[]): Record<string, Schedule[]> {
  return schedules.reduce((acc, schedule) => {
    if (!schedule.date) return acc;
    if (!acc[schedule.date]) acc[schedule.date] = [];
    acc[schedule.date].push(schedule);
    return acc;
  }, {} as Record<string, Schedule[]>);
}

export function getSchedulesByTutor(schedules: Schedule[], tutor: string): Schedule[] {
  return schedules.filter(s => s.tutor === tutor);
}
