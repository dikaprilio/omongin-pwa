'use server';

import { unstable_noStore as noStore } from 'next/cache';
import {
  fetchOrders,
  appendOrder,
  updateOrder,
  deleteOrder,
  calculateOrderStats,
  getFilterOptions,
  Order,
} from '@/lib/google/sheets';
import {
  createOrderSchema,
  updateOrderSchema,
  CreateOrderInput,
  UpdateOrderInput,
} from '@/lib/validations/order';
import { revalidatePath } from 'next/cache';

// Rate limiting helper
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 30;
const requestLog = new Map<string, number[]>();

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const requests = requestLog.get(identifier) || [];
  
  // Clean old requests
  const validRequests = requests.filter((time) => now - time < RATE_LIMIT_WINDOW);
  
  if (validRequests.length >= MAX_REQUESTS) {
    return false;
  }
  
  validRequests.push(now);
  requestLog.set(identifier, validRequests);
  return true;
}

export async function getOrders() {
  noStore(); // Disable caching for this server action
  try {
    const orders = await fetchOrders();
    const stats = calculateOrderStats(orders);
    const filterOptions = getFilterOptions(orders);

    return {
      success: true as const,
      orders,
      stats,
      filterOptions,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error in getOrders action:', error);
    return {
      success: false as const,
      error: error instanceof Error ? error.message : 'Failed to fetch orders',
      orders: [] as Order[],
      stats: {
        totalOrders: 0,
        donePayments: 0,
        pendingPayments: 0,
        totalRevenue: 0,
        unassigned: 0,
      },
      filterOptions: {
        packages: [] as string[],
        locations: [] as string[],
        assignedTo: [] as string[],
        paymentStatuses: [] as string[],
        sessionTypes: [] as string[],
      },
      lastUpdated: null,
    };
  }
}

export async function createOrder(data: CreateOrderInput) {
  try {
    // Validate input
    const validated = createOrderSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false as const,
        error: `Validation error: ${validated.error.issues.map((e) => e.message).join(', ')}`,
      };
    }

    // Convert undefined to null/empty for optional fields
    const orderData: Parameters<typeof appendOrder>[0] = {
      // Don't generate date here - let appendOrder handle it with proper time
      date: validated.data.date,
      name: validated.data.name,
      age: validated.data.age ?? null,
      job: validated.data.job || '',
      location: validated.data.location || '',
      package: validated.data.package || '',
      totalSessions: validated.data.totalSessions ?? null,
      remainingSessions: validated.data.remainingSessions ?? null,
      totalPayment: validated.data.totalPayment ?? null,
      paymentStatus: (validated.data.paymentStatus || '') as '' | 'Done' | 'Not Done',
      assignedTo: validated.data.assignedTo || '',
      metodePayment: (validated.data.metodePayment || '') as '' | 'OLD' | 'NEW',
      sessionType: (validated.data.sessionType || 'Private') as Order['sessionType'],
      groupId: validated.data.groupId || '',
    };

    const order = await appendOrder(orderData);
    revalidatePath('/orders');
    
    return {
      success: true as const,
      order,
    };
  } catch (error) {
    console.error('Error creating order:', error);
    return {
      success: false as const,
      error: error instanceof Error ? error.message : 'Failed to create order',
    };
  }
}

export async function editOrder(rowIndex: number, data: UpdateOrderInput) {
  try {
    // Validate input
    const validated = updateOrderSchema.safeParse(data);
    if (!validated.success) {
      return {
        success: false as const,
        error: `Validation error: ${validated.error.issues.map((e) => e.message).join(', ')}`,
      };
    }

    // Convert undefined to null for optional fields
    const updateData: Partial<{
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
      sessionType: Order['sessionType'];
      groupId: string;
    }> = {};

    if (validated.data.date !== undefined) updateData.date = validated.data.date;
    if (validated.data.name !== undefined) updateData.name = validated.data.name;
    if (validated.data.age !== undefined) updateData.age = validated.data.age ?? null;
    if (validated.data.job !== undefined) updateData.job = validated.data.job;
    if (validated.data.location !== undefined) updateData.location = validated.data.location;
    if (validated.data.package !== undefined) updateData.package = validated.data.package;
    if (validated.data.totalSessions !== undefined) updateData.totalSessions = validated.data.totalSessions ?? null;
    if (validated.data.remainingSessions !== undefined) updateData.remainingSessions = validated.data.remainingSessions ?? null;
    if (validated.data.totalPayment !== undefined) updateData.totalPayment = validated.data.totalPayment ?? null;
    if (validated.data.paymentStatus !== undefined) updateData.paymentStatus = validated.data.paymentStatus;
    if (validated.data.assignedTo !== undefined) updateData.assignedTo = validated.data.assignedTo;
    if (validated.data.metodePayment !== undefined) updateData.metodePayment = validated.data.metodePayment;
    if (validated.data.sessionType !== undefined) updateData.sessionType = validated.data.sessionType as Order['sessionType'];
    if (validated.data.groupId !== undefined) updateData.groupId = validated.data.groupId;

    const order = await updateOrder(rowIndex, updateData);
    revalidatePath('/orders');
    
    return {
      success: true as const,
      order,
    };
  } catch (error) {
    console.error('Error updating order:', error);
    return {
      success: false as const,
      error: error instanceof Error ? error.message : 'Failed to update order',
    };
  }
}

export async function removeOrder(rowIndex: number) {
  try {
    await deleteOrder(rowIndex);
    revalidatePath('/orders');
    
    return {
      success: true as const,
    };
  } catch (error) {
    console.error('Error deleting order:', error);
    return {
      success: false as const,
      error: error instanceof Error ? error.message : 'Failed to delete order',
    };
  }
}

export async function syncOrders() {
  // Force revalidation and re-fetch
  revalidatePath('/orders');
  return getOrders();
}
