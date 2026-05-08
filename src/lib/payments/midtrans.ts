/**
 * Midtrans Payment Integration
 * 
 * This file contains the Midtrans SDK wrapper for payment processing.
 * Implementation guide: docs/PAYMENT_INTEGRATION.md
 * 
 * Prerequisites:
 * 1. Install midtrans-client: npm install midtrans-client
 * 2. Add MIDTRANS_SERVER_KEY and MIDTRANS_CLIENT_KEY to .env.local
 * 3. Configure webhook in Midtrans Dashboard
 */

// TODO: Uncomment after installing midtrans-client
// import Midtrans from 'midtrans-client';

// TODO: Initialize Snap for frontend
// export const snap = new Midtrans.Snap({
//   isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
//   serverKey: process.env.MIDTRANS_SERVER_KEY!,
//   clientKey: process.env.MIDTRANS_CLIENT_KEY!,
// });

// TODO: Initialize CoreApi for backend
// export const coreApi = new Midtrans.CoreApi({
//   isProduction: process.env.MIDTRANS_IS_PRODUCTION === 'true',
//   serverKey: process.env.MIDTRANS_SERVER_KEY!,
//   clientKey: process.env.MIDTRANS_CLIENT_KEY!,
// });

export interface CreateTransactionParams {
  transaction_details: {
    order_id: string;
    gross_amount: number;
  };
  customer_details: {
    email: string;
    first_name: string;
    last_name?: string;
    phone?: string;
  };
  item_details: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  enabled_payments?: string[]; // Optional: filter payment methods
}

export interface SnapTokenResponse {
  token: string;
  redirect_url: string;
}

/**
 * Create a Snap transaction token
 * 
 * Usage:
 * ```
 * const transaction = await createTransaction({
 *   transaction_details: {
 *     order_id: 'PAY-123-uuid',
 *     gross_amount: 100000,
 *   },
 *   customer_details: {
 *     email: 'user@example.com',
 *     first_name: 'John',
 *   },
 *   item_details: [{
 *     id: 'pkg-1',
 *     name: 'Premium Package',
 *     price: 100000,
 *     quantity: 1,
 *   }],
 * });
 * 
 * // Returns: { token: '...', redirect_url: '...' }
 * // Use token with window.snap.pay(token, { ... })
 * ```
 */
export async function createTransaction(
  params: CreateTransactionParams
): Promise<SnapTokenResponse> {
  // TODO: Implement after installing midtrans-client
  throw new Error('Midtrans not implemented yet. See docs/PAYMENT_INTEGRATION.md');
  
  // Implementation:
  // const transaction = await snap.createTransaction(params);
  // return transaction;
}

/**
 * Get transaction status from Midtrans
 */
export async function getTransactionStatus(orderId: string) {
  // TODO: Implement after installing midtrans-client
  throw new Error('Midtrans not implemented yet. See docs/PAYMENT_INTEGRATION.md');
  
  // Implementation:
  // return coreApi.transaction.status(orderId);
}

/**
 * Cancel a pending transaction
 */
export async function cancelTransaction(orderId: string) {
  // TODO: Implement after installing midtrans-client
  throw new Error('Midtrans not implemented yet. See docs/PAYMENT_INTEGRATION.md');
  
  // Implementation:
  // return coreApi.transaction.cancel(orderId);
}

/**
 * Generate unique order ID
 * Format: PAY-{timestamp}-{shortuuid}
 */
export function generateOrderId(): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `PAY-${timestamp}-${random}`;
}

/**
 * Map Midtrans transaction status to our internal status
 */
export function mapMidtransStatus(midtransStatus: string): {
  status: 'pending' | 'success' | 'failed' | 'expired' | 'cancelled';
  isSuccess: boolean;
} {
  switch (midtransStatus) {
    case 'capture':
    case 'settlement':
      return { status: 'success', isSuccess: true };
    case 'pending':
      return { status: 'pending', isSuccess: false };
    case 'deny':
    case 'cancel':
      return { status: 'cancelled', isSuccess: false };
    case 'expire':
      return { status: 'expired', isSuccess: false };
    default:
      return { status: 'pending', isSuccess: false };
  }
}
