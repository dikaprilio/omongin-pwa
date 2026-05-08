import { google } from 'googleapis';

// Sheet configuration
const SHEET_RANGE = 'A4:N'; // Extended to include SessionType & GroupID columns
const SHEET_ID = 0; // First sheet

export interface Order {
  rowIndex: number; // 0-based index for internal use, 4-based for sheets (row 4 = first data)
  date: string;
  name: string;
  age: number | null;
  job: string;
  location: string;
  package: string;
  totalSessions: number | null;
  remainingSessions: number | null;
  totalPayment: number | null;
  paymentStatus: 'Done' | 'Not Done' | '';
  assignedTo: string;
  metodePayment: 'OLD' | 'NEW' | '';
  sessionType: 'Private' | 'Group - 2 orang' | 'Group - 3 orang' | 'Group - 4 orang' | '';
  groupId: string;
  lastModified?: string;
}

// Helper functions
function parseNumber(value: string | undefined): number | null {
  if (!value || value.trim() === '' || value === '-') return null;
  const clean = value.replace(/\./g, '').replace(/,/g, '.');
  const num = parseFloat(clean);
  return isNaN(num) ? null : num;
}

function parseCurrency(value: string | undefined): number | null {
  if (!value || value.trim() === '' || value === '-') return null;
  const clean = value.replace(/\./g, '').replace(/,/g, '.');
  const num = parseFloat(clean);
  return isNaN(num) ? null : num;
}

function formatCurrency(value: number | null): string {
  if (value === null) return '';
  // Format with Indonesian locale for proper display in sheets
  // Use comma as decimal separator and dot as thousand separator
  return value.toLocaleString('id-ID', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// Get authenticated sheets client
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

function normalizeSessionType(value: string | undefined): Order['sessionType'] {
  if (!value) return '';
  const normalized = value.trim();
  if (normalized === 'Private') return 'Private';
  if (normalized === 'Group - 2 orang') return 'Group - 2 orang';
  if (normalized === 'Group - 3 orang') return 'Group - 3 orang';
  if (normalized === 'Group - 4 orang') return 'Group - 4 orang';
  return '';
}

// READ: Fetch all orders
export async function fetchOrders(): Promise<Order[]> {
  const { sheets, spreadsheetId } = await getSheetsClient();

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: SHEET_RANGE,
    });

    const rows = response.data.values;
    if (!rows || rows.length === 0) {
      return [];
    }

    return rows
      .map((row, index): Order | null => {
        // Detect if this is new format (with date column) or old format
        // New format: column 0 is date (contains "/" or "-"), column 1 is name
        // Old format: column 0 is name, no date column
        const col0 = row[0]?.trim() || '';
        
        // Check if column 0 looks like a date or is empty (indicating date column exists)
        const looksLikeDate = col0.includes('/') || col0.includes('-');
        const isEmpty = col0 === '';
        const hasDateColumn = looksLikeDate || isEmpty;
        
        // Use offset based on format
        const offset = hasDateColumn ? 0 : -1;
        const name = hasDateColumn ? row[1]?.trim() || '' : col0;
        
        if (!name) return null; // Skip empty rows

        const paymentStatusRaw = row[9 + offset]?.trim() || '';
        const metodePaymentRaw = row[10 + offset]?.trim() || '';
        const sessionTypeRaw = row[12 + offset]?.trim() || '';
        const groupIdRaw = row[13 + offset]?.trim() || '';

        // Parse payment status - check 'not' first since 'not done' contains 'done'
        let paymentStatus: Order['paymentStatus'] = '';
        const statusLower = paymentStatusRaw.toLowerCase();
        if (statusLower.includes('not') || statusLower === 'belum lunas' || statusLower === 'belum') {
          paymentStatus = 'Not Done';
        } else if (statusLower === 'done' || statusLower === 'lunas') {
          paymentStatus = 'Done';
        }

        let metodePayment: Order['metodePayment'] = '';
        if (metodePaymentRaw === 'OLD' || metodePaymentRaw === 'NEW') {
          metodePayment = metodePaymentRaw;
        }

        return {
          rowIndex: index, // 0-based index from data start
          date: hasDateColumn ? col0 : '',
          name,
          age: parseNumber(row[2 + offset]),
          job: row[3 + offset]?.trim() || '',
          location: row[4 + offset]?.trim() || '',
          package: row[5 + offset]?.trim() || '',
          totalSessions: parseNumber(row[6 + offset]),
          remainingSessions: parseNumber(row[7 + offset]),
          totalPayment: parseCurrency(row[8 + offset]),
          paymentStatus,
          metodePayment,
          assignedTo: row[11 + offset]?.trim() || '',
          sessionType: normalizeSessionType(sessionTypeRaw),
          groupId: groupIdRaw,
        };
      })
      .filter((order): order is Order => order !== null);
  } catch (error) {
    console.error('Error fetching orders from Google Sheets:', error);
    throw error;
  }
}

// CREATE: Append new order - inserts at first empty row to maintain contiguous data
export async function appendOrder(order: {
  date?: string;
  name: string;
  age: number | null;
  job: string;
  location: string;
  package: string;
  totalSessions: number | null;
  remainingSessions: number | null;
  totalPayment: number | null;
  paymentStatus: 'Done' | 'Not Done' | '';
  assignedTo: string;
  metodePayment?: 'OLD' | 'NEW' | '';
  sessionType?: Order['sessionType'] | '';
  groupId?: string;
}): Promise<Order> {
  const { sheets, spreadsheetId } = await getSheetsClient();

  // Use Jakarta timezone (WIB UTC+7) for consistent Indonesia time
  const now = new Date();
  const jakartaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  const year = jakartaTime.getFullYear();
  const month = String(jakartaTime.getMonth() + 1).padStart(2, '0');
  const day = String(jakartaTime.getDate()).padStart(2, '0');
  const hours = String(jakartaTime.getHours()).padStart(2, '0');
  const minutes = String(jakartaTime.getMinutes()).padStart(2, '0');
  const seconds = String(jakartaTime.getSeconds()).padStart(2, '0');
  
  // Use plain text format for reliable display
  const dateTimeStr = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  
  const row = [
    order.date || dateTimeStr,
    order.name?.trim() || '',
    order.age?.toString() || '',
    order.job?.trim() || '',
    order.location?.trim() || '',
    order.package?.trim() || '',
    order.totalSessions?.toString() || '',
    order.remainingSessions?.toString() || '',
    formatCurrency(order.totalPayment),
    order.paymentStatus?.trim() || '',
    order.metodePayment?.trim() || '',
    order.assignedTo?.trim() || '',
    order.sessionType || 'Private',
    order.groupId || '',
  ];

  try {
    // Get current data to find the first empty row
    const currentData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: SHEET_RANGE,
    });

    const rows = currentData.data.values || [];
    
    // Find the first empty row (where name is empty)
    // Name is in column B (index 1) in the new format with date column
    let targetRowIndex = rows.length; // Default to appending at end
    for (let i = 0; i < rows.length; i++) {
      if (!rows[i][1]?.trim()) {
        targetRowIndex = i;
        break;
      }
    }
    
    // Calculate actual sheet row number (4 + index)
    const sheetRowNumber = 4 + targetRowIndex;
    const targetRange = `A${sheetRowNumber}:N${sheetRowNumber}`;

    // Update the specific row
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range: targetRange,
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    });

    // Copy formatting from the row above (if it exists and we're not at the first data row)
    if (sheetRowNumber > 4) {
      try {
        const sheetInfo = await sheets.spreadsheets.get({
          spreadsheetId,
        });
        const sheet = sheetInfo.data.sheets?.[0];
        const sheetId = sheet?.properties?.sheetId;

        if (sheetId !== undefined) {
          await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
              requests: [
                {
                  copyPaste: {
                    source: {
                      sheetId,
                      startRowIndex: sheetRowNumber - 2, // Previous row (0-indexed)
                      endRowIndex: sheetRowNumber - 1,
                      startColumnIndex: 0,
                      endColumnIndex: 14,
                    },
                    destination: {
                      sheetId,
                      startRowIndex: sheetRowNumber - 1, // Target row (0-indexed)
                      endRowIndex: sheetRowNumber,
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
                      startRowIndex: sheetRowNumber - 1,
                      endRowIndex: sheetRowNumber,
                      startColumnIndex: 0,
                      endColumnIndex: 14,
                    },
                    pasteType: 'PASTE_DATA_VALIDATION',
                    pasteOrientation: 'NORMAL',
                  },
                },
              ],
            },
          });
        }
      } catch (formatError) {
        console.warn('Could not copy formatting to new row:', formatError);
      }
    }

    return { 
      ...order, 
      rowIndex: targetRowIndex,
      date: order.date || new Date().toLocaleDateString('id-ID'),
      metodePayment: order.metodePayment || '',
      sessionType: (order.sessionType || 'Private') as Order['sessionType'],
      groupId: order.groupId || '',
    };
  } catch (error) {
    console.error('Error appending order to Google Sheets:', error);
    throw error;
  }
}

// UPDATE: Update existing order
export async function updateOrder(
  rowIndex: number,
  updates: Partial<Omit<Order, 'rowIndex'>>
): Promise<Order> {
  const { sheets, spreadsheetId } = await getSheetsClient();

  // First get current row to detect format
  const sheetRow = 4 + rowIndex;
  const currentRowResponse = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: `A${sheetRow}:N${sheetRow}`,
  });
  
  const currentRow = currentRowResponse.data.values?.[0] || [];
  const col0 = currentRow[0]?.trim() || '';
  
  // Detect if existing data has date column
  const looksLikeDate = col0.includes('/') || col0.includes('-');
  const isEmpty = col0 === '';
  const hasDateColumn = looksLikeDate || isEmpty;
  
  // For old data without date, read existing values directly
  let existing: Order;
  
  if (!hasDateColumn && col0) {
    // Old format - parse directly from currentRow
    existing = {
      rowIndex,
      date: '',
      name: col0,
      age: parseNumber(currentRow[1]),
      job: currentRow[2]?.trim() || '',
      location: currentRow[3]?.trim() || '',
      package: currentRow[4]?.trim() || '',
      totalSessions: parseNumber(currentRow[5]),
      remainingSessions: parseNumber(currentRow[6]),
      totalPayment: parseCurrency(currentRow[7]),
      paymentStatus: currentRow[8]?.toLowerCase().includes('not') ? 'Not Done' :
                     currentRow[8]?.toLowerCase().includes('done') ? 'Done' : '',
      metodePayment: currentRow[9] === 'OLD' || currentRow[9] === 'NEW' ? currentRow[9] : '',
      assignedTo: currentRow[10]?.trim() || '',
      sessionType: normalizeSessionType(currentRow[11]),
      groupId: currentRow[12]?.trim() || '',
    };
  } else {
    // New format with date - use fetchOrders
    const current = await fetchOrders();
    const found = current.find((o) => o.rowIndex === rowIndex);
    if (!found) {
      throw new Error('Order not found');
    }
    existing = found;
  }

  // Merge updates
  const updated = { ...existing, ...updates };

  // Build row based on format
  let row: string[];
  // Get current time for date updates (Jakarta timezone WIB UTC+7)
  const now = new Date();
  const jakartaTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
  const hours = String(jakartaTime.getHours()).padStart(2, '0');
  const minutes = String(jakartaTime.getMinutes()).padStart(2, '0');
  const seconds = String(jakartaTime.getSeconds()).padStart(2, '0');
  const timeStr = `${hours}:${minutes}:${seconds}`;
  
  if (hasDateColumn) {
    // New format with date column
    // If date is being updated, use current time; otherwise preserve existing
    let dateValue = updated.date;
    if (updates.date !== undefined) {
      // Date being explicitly set - add current time as plain text
      dateValue = `${updates.date} ${timeStr}`;
    }
    row = [
      dateValue || '',
      updated.name,
      updated.age?.toString() || '',
      updated.job,
      updated.location,
      updated.package,
      updated.totalSessions?.toString() || '',
      updated.remainingSessions?.toString() || '',
      formatCurrency(updated.totalPayment),
      updated.paymentStatus,
      updated.metodePayment || '',
      updated.assignedTo,
      updated.sessionType || 'Private',
      updated.groupId || '',
    ];
  } else {
    // Old format without date column
    row = [
      updated.name,
      updated.age?.toString() || '',
      updated.job,
      updated.location,
      updated.package,
      updated.totalSessions?.toString() || '',
      updated.remainingSessions?.toString() || '',
      formatCurrency(updated.totalPayment),
      updated.paymentStatus,
      updated.metodePayment || '',
      updated.assignedTo,
      updated.sessionType || 'Private',
      updated.groupId || '',
    ];
  }
  
  console.log('[updateOrder] Writing row:', row);

  const range = hasDateColumn ? `A${sheetRow}:N${sheetRow}` : `A${sheetRow}:L${sheetRow}`;
  console.log('[updateOrder] Range:', range);

  try {
    await sheets.spreadsheets.values.update({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      requestBody: {
        values: [row],
      },
    });

    return updated;
  } catch (error) {
    console.error('Error updating order in Google Sheets:', error);
    throw error;
  }
}

// DELETE: Delete order
export async function deleteOrder(rowIndex: number): Promise<void> {
  const { sheets, spreadsheetId } = await getSheetsClient();

  // Calculate actual sheet row
  const sheetRow = 4 + rowIndex;

  try {
    // Clear the row
    const range = `A${sheetRow}:N${sheetRow}`;
    await sheets.spreadsheets.values.clear({
      spreadsheetId,
      range,
    });

    // Note: In Google Sheets, clearing just empties the cells
    // To actually delete the row and shift up, we need more complex logic
    // For now, we'll leave empty rows which get filtered out on read
  } catch (error) {
    console.error('Error deleting order from Google Sheets:', error);
    throw error;
  }
}

// Calculate stats from orders
export function calculateOrderStats(orders: Order[]) {
  const totalOrders = orders.length;
  const donePayments = orders.filter((o) => o.paymentStatus === 'Done').length;
  const pendingPayments = orders.filter((o) => o.paymentStatus === 'Not Done').length;
  const totalRevenue = orders
    .filter((o) => o.paymentStatus === 'Done')
    .reduce((sum, o) => sum + (o.totalPayment || 0), 0);
  const unassigned = orders.filter((o) => !o.assignedTo || o.assignedTo === '').length;

  return {
    totalOrders,
    donePayments,
    pendingPayments,
    totalRevenue,
    unassigned,
  };
}

// Get unique values for filters
export function getFilterOptions(orders: Order[]) {
  const packages = [...new Set(orders.map((o) => o.package).filter(Boolean))].sort();
  const locations = [...new Set(orders.map((o) => o.location).filter(Boolean))].sort();
  const assignedTo = [...new Set(orders.map((o) => o.assignedTo).filter(Boolean))].sort();
  const paymentStatuses = ['Done', 'Not Done'];
  const sessionTypes = ['Private', 'Group - 2 orang', 'Group - 3 orang', 'Group - 4 orang'];

  return {
    packages,
    locations,
    assignedTo,
    paymentStatuses,
    sessionTypes,
  };
}
