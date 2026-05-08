/**
 * Midtrans Notification Handler (Webhook)
 * 
 * Receives payment status updates from Midtrans
 * POST /api/payments/notification
 * 
 * Midtrans will send notification when:
 * - Payment is successful (settlement/capture)
 * - Payment is pending
 * - Payment expires
 * - Payment is cancelled
 * 
 * Body: Midtrans notification JSON
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log notification for debugging
    console.log('Midtrans notification received:', {
      order_id: body.order_id,
      transaction_status: body.transaction_status,
      payment_type: body.payment_type,
    });

    // TODO: Verify signature key for security (optional)
    // const { verifySignature } = await import('@/lib/payments/midtrans');
    // const isValid = verifySignature(body, process.env.MIDTRANS_SERVER_KEY!);
    // if (!isValid) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
    // }

    const {
      order_id,
      transaction_status,
      payment_type,
      transaction_id,
      va_numbers,
      qr_string,
      signature_key,
    } = body;

    const supabase = await createClient();

    // Find payment by order ID
    const { data: payment, error: paymentError } = await supabase
      .from('payments')
      .select('*')
      .eq('midtrans_order_id', order_id)
      .single();

    if (paymentError || !payment) {
      console.error('Payment not found for order ID:', order_id);
      return NextResponse.json(
        { error: 'Payment not found' },
        { status: 404 }
      );
    }

    // TODO: Import mapMidtransStatus
    // const { mapMidtransStatus } = await import('@/lib/payments/midtrans');
    // const { status: newStatus, isSuccess } = mapMidtransStatus(transaction_status);

    // Determine new status
    let newStatus = payment.status;
    let paidAt = payment.paid_at;
    let isSuccess = false;

    switch (transaction_status) {
      case 'capture':
      case 'settlement':
        newStatus = 'success';
        paidAt = new Date().toISOString();
        isSuccess = true;
        break;
      case 'deny':
      case 'cancel':
        newStatus = 'cancelled';
        break;
      case 'expire':
        newStatus = 'expired';
        break;
      case 'pending':
        newStatus = 'pending';
        break;
    }

    // Update payment record
    const { error: updateError } = await supabase
      .from('payments')
      .update({
        status: newStatus,
        paid_at: paidAt,
        midtrans_transaction_id: transaction_id,
        midtrans_transaction_status: transaction_status,
        midtrans_payment_type: payment_type,
        va_number: va_numbers?.[0]?.va_number,
        metadata: {
          ...payment.metadata,
          notification: body,
        },
      })
      .eq('id', payment.id);

    if (updateError) {
      console.error('Failed to update payment:', updateError);
      return NextResponse.json(
        { error: 'Failed to update payment' },
        { status: 500 }
      );
    }

    // Create subscription on successful payment
    if (isSuccess && newStatus === 'success') {
      // Get package details for sessions count
      const { data: pkg } = await supabase
        .from('packages')
        .select('total_sessions')
        .eq('id', payment.package_id)
        .single();

      const { error: subError } = await supabase
        .from('subscriptions')
        .insert({
          user_id: payment.user_id,
          package_id: payment.package_id,
          status: 'active',
          sessions_remaining: pkg?.total_sessions || payment.metadata?.sessions || 0,
        });

      if (subError) {
        console.error('Failed to create subscription:', subError);
      }

      // TODO: Send confirmation email
      // await sendPaymentConfirmationEmail(payment.user_id, payment);
    }

    // Always return 200 to Midtrans
    return NextResponse.json({ 
      received: true, 
      processed: true,
      order_id,
      status: newStatus,
    });

  } catch (error) {
    console.error('Notification processing error:', error);
    // Still return 200 to prevent Midtrans retries (log error internally)
    return NextResponse.json(
      { received: true, error: 'Processing error' },
      { status: 200 }
    );
  }
}
