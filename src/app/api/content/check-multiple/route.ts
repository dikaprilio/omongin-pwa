import { NextRequest, NextResponse } from 'next/server';
import { checkMultipleFeatures } from '@/lib/content/access-control';

/**
 * API route to check multiple features at once
 * POST /api/content/check-multiple
 * Body: { featureIds: ['interview-sim', 'writing-test'] }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { featureIds } = body;

    if (!Array.isArray(featureIds) || featureIds.length === 0) {
      return NextResponse.json(
        { error: 'Missing or invalid featureIds array' },
        { status: 400 }
      );
    }

    const results = await checkMultipleFeatures(featureIds);

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Multiple features check error:', error);
    return NextResponse.json(
      { error: 'Failed to check features' },
      { status: 500 }
    );
  }
}
