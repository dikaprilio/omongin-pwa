/**
 * Create Payment API (Midtrans)
 * 
 * Creates a new payment and generates Snap token
 * POST /api/payments/create
 * 
 * Body: {
 *   packageId: string;
 *   paymentMethod?: string; // Optional: 'bank_transfer', 'qris', 'gopay', etc
 * }
 * 
 * Response: {
 *   paymentId: string;
 *   token: string; // Snap token for frontend
 *   redirect_url: string;
 * }
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { packageId, paymentMethod } = body;

    if (!packageId) {
      return NextResponse.json(
        { error: 'Package ID is required' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Get current user
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get package details
    const { data: pkg, error: packageError } = await supabase
      .from('packages')
      .select('*')
      .eq('id', packageId)
      .single();

    if (packageError || !pkg) {
      return NextResponse.json(
        { error: 'Package not found' },
        { status: 404 }
      );
    }

    // TODO: Import from '@/lib/payments/midtrans'
    // const { generateOrderId, createTransaction } = await import('@/lib/payments/midtrans');
    
    // Generate unique order ID
    // const orderId = generateOrderId();

    // TODO: Create payment record in database
    // const { data: payment } = await supabase
    //   .from('payments')
    //   .insert({
    //     user_id: user.id,
    //     package_id: packageId,
    //     midtrans_order_id: orderId,
    //     amount: pkg.price,
    //     status: 'pending',
    //     description: `Purchase: ${pkg.name}`,
    //     payment_type: paymentMethod,
    //   })
    //   .select()
    //   .single();

    // TODO: Create Midtrans Snap transaction
    // const transaction = await createTransaction({
    //   transaction_details: {
    //     order_id: orderId,
    //     gross_amount: pkg.price,
    //   },
    //   customer_details: {
    //     email: user.email!,
    //     first_name: user.user_metadata?.full_name?.split(' ')[0] || 'User',
    //     last_name: user.user_metadata?.full_name?.split(' ').slice(1).join(' ') || '',
    //   },
    //   item_details: [{
    //     id: pkg.id,
    //     name: pkg.name,
    //     price: pkg.price,
    //     quantity: 1,
    //   }],
    //   ...(paymentMethod && {
    //     enabled_payments: [paymentMethod],
    //   }),
    // });

    // Placeholder response
    return NextResponse.json({
      message: 'Payment creation not implemented yet. See docs/PAYMENT_INTEGRATION.md',
      package: {
        id: pkg.id,
        name: pkg.name,
        price: pkg.price,
      },
      // paymentId: payment.id,
      // token: transaction.token,
      // redirect_url: transaction.redirect_url,
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    );
  }
}
