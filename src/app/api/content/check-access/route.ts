import { NextRequest, NextResponse } from 'next/server';
import { checkContentAccess } from '@/lib/content/access-control';

/**
 * API route to check content access for client-side gating
 * GET /api/content/check-access?feature=interview-sim
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featureId = searchParams.get('feature');
    const path = searchParams.get('path');

    if (!featureId && !path) {
      return NextResponse.json(
        { error: 'Missing feature or path parameter' },
        { status: 400 }
      );
    }

    // Use path if provided, otherwise construct from feature ID
    const checkPath = path || `/curriculum/${featureId}`;
    const result = await checkContentAccess(checkPath);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Content access check error:', error);
    return NextResponse.json(
      { 
        allowed: false, 
        reason: 'unauthorized',
        error: 'Failed to check access'
      },
      { status: 500 }
    );
  }
}
