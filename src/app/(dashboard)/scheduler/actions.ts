'use server';

import { isAdmin, isTeacher } from '@/lib/auth/roles';
import { createClient } from '@/utils/supabase/server';
import {
  fetchSchedules,
  fetchStudentNames,
  createSchedule,
  createSchedules,
  updateSchedule,
  updateSchedules,
  deleteSchedule,
  syncSessionsToTutorSheets,
  type Schedule,
  type CreateScheduleInput,
} from '@/lib/google/scheduler';

// Error wrapper for consistent error handling
function handleError(error: unknown, context: string): never {
  console.error(`[Scheduler] ${context}:`, error);
  throw new Error(`${context}: ${error instanceof Error ? error.message : String(error)}`);
}

// Check admin access
async function checkAdmin() {
  const admin = await isAdmin();
  if (!admin) {
    throw new Error('Unauthorized: Admin access required');
  }
}

// Check admin or teacher access (read-only operations like fetching teacher list for calendar)
async function checkAdminOrTeacher() {
  const [admin, teacher] = await Promise.all([isAdmin(), isTeacher()]);
  if (!admin && !teacher) {
    throw new Error('Unauthorized: Admin or Teacher access required');
  }
}

// ===== READ ACTIONS =====

export async function getSchedulesAction(): Promise<Schedule[]> {
  await checkAdmin();
  try {
    return await fetchSchedules();
  } catch (error) {
    handleError(error, 'Failed to fetch schedules');
  }
}

export async function fetchStudentNamesAction(): Promise<string[]> {
  await checkAdmin();
  try {
    return await fetchStudentNames();
  } catch (error) {
    handleError(error, 'Failed to fetch student names');
  }
}

export async function fetchTeachersAction(): Promise<{ id: string, full_name: string, shortName: string }[]> {
  await checkAdminOrTeacher();
  try {
    const supabase = await createClient();
    const { data: teachers, error } = await supabase
      .from('profiles')
      .select('id, full_name')
      .eq('role', 'teacher');

    if (error) throw error;

    // Process short names
    return (teachers || []).map(t => {
      let shortName = t.full_name.split(' ')[0];
      if (shortName === 'M.' && t.full_name.split(' ').length > 1) {
        shortName = t.full_name.split(' ')[1];
      }

      const lowerName = t.full_name.toLowerCase();
      if (lowerName.includes('zen') || lowerName.includes('arifin')) shortName = 'Zen';
      else if (lowerName.includes('sadaad')) shortName = 'Sadaad';
      else if (lowerName.includes('cyril')) shortName = 'Cyril';
      else if (lowerName.includes('sasna')) shortName = 'Sasna';
      else if (lowerName.includes('nafiis')) shortName = 'Nafiis';
      else if (lowerName.includes('zia')) shortName = 'Zia';
      else if (lowerName.includes('nayla')) shortName = 'Nayla';

      return {
        id: t.id,
        full_name: t.full_name,
        shortName
      };
    });
  } catch (error) {
    handleError(error, 'Failed to fetch teachers');
  }
}

// ===== CREATE ACTIONS =====

export async function createScheduleAction(
  input: CreateScheduleInput
): Promise<Schedule> {
  await checkAdmin();
  try {
    const result = await createSchedule(input);

    // Auto-sync to tutor sheets in background (don't await)
    syncSessionsToTutorSheets().catch(err =>
      console.error('[Scheduler] Auto-sync after create failed:', err)
    );

    return result;
  } catch (error) {
    handleError(error, 'Failed to create schedule');
  }
}

export async function createSchedulesAction(
  inputs: CreateScheduleInput[]
): Promise<Schedule[]> {
  await checkAdmin();
  try {
    // Batch create - single API call
    const results = await createSchedules(inputs);

    // Auto-sync ONCE after batch create
    syncSessionsToTutorSheets().catch(err =>
      console.error('[Scheduler] Auto-sync after batch create failed:', err)
    );

    return results;
  } catch (error) {
    handleError(error, 'Failed to create schedules');
  }
}

// ===== UPDATE ACTIONS =====

export async function updateScheduleAction(
  rowIndex: number,
  updates: Partial<Omit<Schedule, 'rowIndex'>>
): Promise<Schedule> {
  await checkAdmin();
  try {
    const result = await updateSchedule(rowIndex, updates);

    // Auto-sync in background
    syncSessionsToTutorSheets().catch(err =>
      console.error('[Scheduler] Auto-sync after update failed:', err)
    );

    return result;
  } catch (error) {
    handleError(error, 'Failed to update schedule');
  }
}

export async function updateSchedulesAction(
  updates: { rowIndex: number; data: Partial<Omit<Schedule, 'rowIndex'>> }[]
): Promise<Schedule[]> {
  await checkAdmin();
  try {
    // Batch update - single API call for multiple rows
    const results = await updateSchedules(updates);

    // Auto-sync ONCE after batch update
    syncSessionsToTutorSheets().catch(err =>
      console.error('[Scheduler] Auto-sync after batch update failed:', err)
    );

    return results;
  } catch (error) {
    handleError(error, 'Failed to update schedules');
  }
}

export async function rescheduleJadwalAction(
  rowIndex: number,
  newDate: string,
  newTime: string
): Promise<void> {
  await checkAdmin();
  try {
    // Update with new date/time AND set status to 'Rescheduled'
    await updateSchedule(rowIndex, {
      date: newDate,
      time: newTime,
      status: 'Rescheduled'
    });

    // Auto-sync
    syncSessionsToTutorSheets().catch(err =>
      console.error('[Scheduler] Auto-sync after reschedule failed:', err)
    );
  } catch (error) {
    handleError(error, 'Failed to reschedule');
  }
}

// ===== DELETE ACTIONS =====

export async function deleteScheduleAction(rowIndex: number): Promise<void> {
  await checkAdmin();
  try {
    // 1. Delete from main sheet
    await deleteSchedule(rowIndex);

    // 2. Wait a moment for Google Sheets API to propagate the change
    // This helps ensure fetchSchedules() sees the updated data
    await new Promise(resolve => setTimeout(resolve, 300));

    // 3. Sync to tutor sheets to remove the deleted entry
    const result = await syncSessionsToTutorSheets();
    console.log(`[Scheduler] Synced after delete: ${result.synced} sessions to ${result.tutors.join(', ')}`);
  } catch (error) {
    handleError(error, 'Failed to delete schedule');
  }
}

// ===== SYNC ACTION =====

export async function syncToSheetsAction(): Promise<{
  success: boolean;
  synced: number;
  tutors: string[];
  errors: string[];
}> {
  await checkAdmin();
  try {
    const result = await syncSessionsToTutorSheets();

    return {
      success: true,
      ...result,
    };
  } catch (error) {
    handleError(error, 'Sync failed');
  }
}

// ===== BULK OPERATIONS =====

export async function bulkUpdateStatusAction(
  updates: { rowIndex: number; status: Schedule['status'] }[]
): Promise<Schedule[]> {
  await checkAdmin();
  try {
    const fullUpdates = updates.map(({ rowIndex, status }) => ({
      rowIndex,
      data: { status } as Partial<Omit<Schedule, 'rowIndex'>>,
    }));

    return await updateSchedulesAction(fullUpdates);
  } catch (error) {
    handleError(error, 'Failed to bulk update status');
  }
}
