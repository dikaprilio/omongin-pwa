import { NextRequest, NextResponse } from 'next/server';
import { getContentFeaturesWithAccess } from '@/lib/content/access-control';
import { type ContentCategory } from '@/lib/content/content-types';

/**
 * API route to get all features with access status
 * GET /api/content/features?category=assessment
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') as ContentCategory | null;

    const features = await getContentFeaturesWithAccess();

    // Filter by category if provided
    const filteredFeatures = category 
      ? features.filter(f => f.category === category)
      : features;

    return NextResponse.json({ features: filteredFeatures });
  } catch (error) {
    console.error('Features fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch features' },
      { status: 500 }
    );
  }
}
