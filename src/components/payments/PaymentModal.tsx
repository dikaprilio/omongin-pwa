/**
 * Midtrans Payment Modal
 * 
 * Usage:
 * ```
 * <PaymentModal
 *   packageId="pkg-uuid"
 *   packageName="Premium Package"
 *   price={100000}
 *   isOpen={showModal}
 *   onClose={() => setShowModal(false)}
 * />
 * ```
 */

'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PaymentModalProps {
  packageId: string;
  packageName: string;
  price: number;
  isOpen: boolean;
  onClose: () => void;
}

export function PaymentModal({
  packageId,
  packageName,
  price,
  isOpen,
  onClose,
}: PaymentModalProps) {
  const [snapToken, setSnapToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || !packageId) return;

    // Create payment and get Snap token
    const createPayment = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch('/api/payments/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ packageId }),
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(err.error || 'Failed to create payment');
        }

        const { token } = await response.json();
        setSnapToken(token);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    createPayment();
  }, [isOpen, packageId]);

  const openSnap = () => {
    if (snapToken && typeof window !== 'undefined' && window.snap) {
      window.snap.pay(snapToken, {
        onSuccess: (result: any) => {
          console.log('Payment success:', result);
          onClose();
          // Redirect to success page or refresh
          window.location.href = '/payment/success';
        },
        onPending: (result: any) => {
          console.log('Payment pending:', result);
          onClose();
          window.location.href = '/payment/pending';
        },
        onError: (result: any) => {
          console.error('Payment error:', result);
          setError('Payment failed. Please try again.');
        },
        onClose: () => {
          console.log('Payment closed');
          // User closed the popup without completing
        },
      });
    }
  };

  // Snap script URL
  const snapScriptUrl = process.env.NEXT_PUBLIC_MIDTRANS_IS_PRODUCTION === 'true'
    ? 'https://app.midtrans.com/snap/snap.js'
    : 'https://app.sandbox.midtrans.com/snap/snap.js';

  return (
    <>
      <Script
        src={snapScriptUrl}
        data-client-key={process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY}
        strategy="afterInteractive"
      />

      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Complete Your Purchase</DialogTitle>
            <DialogDescription>
              Subscribe to {packageName} and unlock all premium features
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Price Display */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Total Amount</p>
              <p className="text-3xl font-bold">
                Rp {price.toLocaleString('id-ID')}
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 text-red-600 rounded-md text-sm">
                {error}
              </div>
            )}

            {/* Payment Button */}
            <Button
              onClick={openSnap}
              disabled={isLoading || !snapToken}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : (
                'Pay Now'
              )}
            </Button>

            {/* Supported Payment Methods */}
            <div className="text-center text-xs text-muted-foreground">
              <p>Supported payment methods:</p>
              <p>BCA, BNI, BRI, Mandiri Virtual Account • QRIS • GoPay • ShopeePay</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// Type declaration for window.snap
declare global {
  interface Window {
    snap: {
      pay: (
        token: string,
        callbacks: {
          onSuccess?: (result: any) => void;
          onPending?: (result: any) => void;
          onError?: (result: any) => void;
          onClose?: () => void;
        }
      ) => void;
    };
  }
}
