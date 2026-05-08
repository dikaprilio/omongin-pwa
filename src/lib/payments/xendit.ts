/**
 * Xendit Payment Integration
 * 
 * This file contains the Xendit SDK wrapper for payment processing.
 * Implementation guide: docs/PAYMENT_INTEGRATION.md
 * 
 * Prerequisites:
 * 1. Install xendit-node: npm install xendit-node
 * 2. Add XENDIT_SECRET_KEY to .env.local
 * 3. Configure webhook in Xendit Dashboard
 */

// TODO: Uncomment after installing xendit-node
// import { Xendit, Invoice as XenditInvoice } from 'xendit-node';

// const xenditClient = new Xendit({
//   secretKey: process.env.XENDIT_SECRET_KEY!,
// });

// const { Invoice } = xenditClient;

export interface CreateInvoiceParams {
  externalId: string;
  amount: number;
  description: string;
  customer: {
    email: string;
    name: string;
  };
  successRedirectUrl: string;
  failureRedirectUrl: string;
}

export interface InvoiceResponse {
  id: string;
  external_id: string;
  user_id: string;
  status: 'PENDING' | 'PAID' | 'SETTLED' | 'EXPIRED';
  merchant_name: string;
  merchant_profile_picture_url: string;
  amount: number;
  payer_email: string;
  description: string;
  expiry_date: string;
  invoice_url: string;
  should_exclude_credit_card: boolean;
  should_send_email: boolean;
  created: string;
  updated: string;
  currency: string;
}

/**
 * Create a Xendit invoice for payment
 * 
 * Usage:
 * ```
 * const invoice = await createInvoice({
 *   externalId: paymentId,
 *   amount: 100000,
 *   description: 'English Course Package',
 *   customer: { email: 'user@example.com', name: 'John' },
 *   successRedirectUrl: 'https://yoursite.com/success',
 *   failureRedirectUrl: 'https://yoursite.com/failed',
 * });
 * ```
 */
export async function createInvoice(params: CreateInvoiceParams): Promise<InvoiceResponse> {
  // TODO: Implement after installing xendit-node
  throw new Error('Xendit not implemented yet. See docs/PAYMENT_INTEGRATION.md');
  
  // Implementation:
  // return Invoice.createInvoice({
  //   externalID: params.externalId,
  //   amount: params.amount,
  //   description: params.description,
  //   customer: {
  //     given_names: params.customer.name,
  //     email: params.customer.email,
  //   },
  //   successRedirectURL: params.successRedirectUrl,
  //   failureRedirectURL: params.failureRedirectUrl,
  //   currency: 'IDR',
  // });
}

/**
 * Get invoice details by ID
 */
export async function getInvoice(invoiceId: string): Promise<InvoiceResponse> {
  // TODO: Implement after installing xendit-node
  throw new Error('Xendit not implemented yet. See docs/PAYMENT_INTEGRATION.md');
  
  // Implementation:
  // return Invoice.getInvoice({ invoiceID: invoiceId });
}

/**
 * Expire an invoice (for cancellation)
 */
export async function expireInvoice(invoiceId: string): Promise<InvoiceResponse> {
  // TODO: Implement after installing xendit-node
  throw new Error('Xendit not implemented yet. See docs/PAYMENT_INTEGRATION.md');
  
  // Implementation:
  // return Invoice.expireInvoice({ invoiceID: invoiceId });
}
