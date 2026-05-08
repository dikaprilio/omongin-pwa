/**
 * Xendit Webhook Handler
 * 
 * Receives payment status updates from Xendit
 * POST /api/payments/webhook
 * 
 * Headers:
 *   x-callback-token: {XENDIT_WEBHOOK_TOKEN}
 * 
 * Body: Xendit invoice callback payload
 */

import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: NextRequest) {
  try {
    // Verify webhook token
    const headersList = await headers();
    const callbackToken = headersList.get('x-callback-token');

    if (callbackToken !== process.env.XENDIT_WEBHOOK_TOKEN) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Log webhook for debugging
    console.log('Xendit webhook received:', {
      id: body.id,
      status: body.status,
      external_id: body.external_id,
    });

    // Only process PAID status
    if (body.status !== 'PAID' && body.status !== 'SETTLED') {
      return NextResponse.json({ received: true });
    }

    const supabase = await createClient();

    // TODO: Update payment status
    // const { data: payment } = await supabase
    //   .from('payments')
    //   .update({
    //     status: 'PAID',
    //     paid_at: new Date().toISOString(),
    //     payment_method: body.payment_method,
    //     payment_channel: body.payment_channel,
    //     metadata: {
    //       ...body,
    //       paid_at: body.paid_at,
    //     },
    //   })
    //   .eq('xendit_id', body.id)
    //   .select()
    //   .single();

    // if (!payment) {
    //   console.error('Payment not found for Xendit ID:', body.id);
    //   return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
    // }

    // TODO: Create subscription
    // await supabase
    //   .from('subscriptions')
    //   .insert({
    //     user_id: payment.user_id,
    //     package_id: payment.package_id,
    //     status: 'active',
    //     sessions_remaining: payment.metadata?.sessions || 0,
    //   });

    // TODO: Send confirmation email
    // await sendPaymentConfirmationEmail(payment.user_id, payment);

    return NextResponse.json({ received: true, processed: true });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process webhook' },
      { status: 500 }
    );
  }
}
