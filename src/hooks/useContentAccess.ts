'use client';

import { useState, useEffect, useCallback } from 'react';
import { type ContentFeature, type ContentCategory } from '@/lib/content/content-types';

interface AccessState {
  hasAccess: boolean;
  isLoading: boolean;
  reason?: 'no_auth' | 'no_subscription' | 'feature_not_included' | 'unauthorized';
  subscriptionStatus?: string;
  feature?: ContentFeature;
}

interface FeatureWithAccess extends ContentFeature {
  hasAccess: boolean;
  reason?: AccessState['reason'];
}

/**
 * Hook to check access to a specific content feature on the client side
 * Note: This is for UI purposes only - always verify on server!
 */
export function useContentAccess(featureId: string): AccessState {
  const [state, setState] = useState<AccessState>({
    hasAccess: false,
    isLoading: true,
  });

  useEffect(() => {
    const checkAccess = async () => {
      try {
        const response = await fetch(`/api/content/check-access?feature=${featureId}`);
        const data = await response.json();
        
        setState({
          hasAccess: data.allowed,
          isLoading: false,
          reason: data.reason,
          subscriptionStatus: data.subscription?.status,
          feature: data.feature,
        });
      } catch (error) {
        setState({
          hasAccess: false,
          isLoading: false,
          reason: 'unauthorized',
        });
      }
    };

    checkAccess();
  }, [featureId]);

  return state;
}

/**
 * Hook to get all features with access status
 * Useful for navigation menus
 */
export function useContentFeatures(category?: ContentCategory): {
  features: FeatureWithAccess[];
  isLoading: boolean;
} {
  const [features, setFeatures] = useState<FeatureWithAccess[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const url = category 
          ? `/api/content/features?category=${category}`
          : '/api/content/features';
        
        const response = await fetch(url);
        const data = await response.json();
        
        setFeatures(data.features || []);
      } catch (error) {
        setFeatures([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatures();
  }, [category]);

  return { features, isLoading };
}

/**
 * Hook to check multiple features at once (efficient)
 */
export function useMultipleFeatureAccess(featureIds: string[]): {
  accessMap: Record<string, boolean>;
  isLoading: boolean;
} {
  const [accessMap, setAccessMap] = useState<Record<string, boolean>>({});
  const [isLoading, setIsLoading] = useState(true);

  const checkAccess = useCallback(async () => {
    if (featureIds.length === 0) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/content/check-multiple', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ featureIds }),
      });
      
      const data = await response.json();
      setAccessMap(data.results || {});
    } catch (error) {
      // Default to false on error
      const fallback: Record<string, boolean> = {};
      featureIds.forEach(id => fallback[id] = false);
      setAccessMap(fallback);
    } finally {
      setIsLoading(false);
    }
  }, [featureIds]);

  useEffect(() => {
    checkAccess();
  }, [checkAccess]);

  return { accessMap, isLoading };
}
