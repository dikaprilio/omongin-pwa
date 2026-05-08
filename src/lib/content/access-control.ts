'use server';

import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { isAdmin, isTeacher } from '@/lib/auth/roles';
import {
  type ContentFeature,
  CONTENT_FEATURES,
  getFeatureByPath
} from './content-types';

function getAllowedModules(subscription: any): string[] {
  if (!subscription) return [];
  const subPrivileges = subscription.privileges || {};
  if (Array.isArray(subPrivileges.allowed_modules)) {
    return subPrivileges.allowed_modules;
  }
  const pkg = Array.isArray(subscription.packages)
    ? subscription.packages[0]
    : subscription.packages;
  const pkgPrivileges = pkg?.privileges || {};
  return Array.isArray(pkgPrivileges.allowed_modules) ? pkgPrivileges.allowed_modules : [];
}

export interface AccessCheckResult {
  allowed: boolean;
  reason?: 'no_auth' | 'no_subscription' | 'feature_not_included' | 'unauthorized';
  feature?: ContentFeature;
  redirectUrl?: string;
  subscription?: {
    status: string;
    sessionsRemaining: number;
    packageName?: string;
  } | null;
}

/**
 * Check if user has access to a specific content path
 * Returns detailed result without redirecting (for UI gating)
 */
export async function checkContentAccess(path: string): Promise<AccessCheckResult> {
  const feature = getFeatureByPath(path);

  // Unknown paths - allow by default (or deny if strict)
  if (!feature) {
    return { allowed: true };
  }

  // Check auth requirement
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (feature.requiresAuth && !user) {
    return {
      allowed: false,
      reason: 'no_auth',
      feature,
      redirectUrl: `/login?redirect_to=${encodeURIComponent(path)}`,
    };
  }

  // Admin/Teacher bypass
  if (user) {
    const admin = await isAdmin();
    const teacher = await isTeacher();
    if (admin || teacher) {
      return { allowed: true, feature };
    }
  }

  // Check subscription requirement
  if (feature.requiresSubscription) {
    if (!user) {
      return {
        allowed: false,
        reason: 'no_auth',
        feature,
        redirectUrl: `/login?redirect_to=${encodeURIComponent(path)}`,
      };
    }

    // Get active subscription with package details
    let subQuery = await supabase
      .from('subscriptions')
      .select(`
        status,
        sessions_remaining,
        privileges,
        packages (id, name, privileges)
      `)
      .eq('user_id', user.id)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();

    let subscription = subQuery.data;
    if (subQuery.error) {
      const fallback = await supabase
        .from('subscriptions')
        .select(`
          status,
          sessions_remaining,
          packages (id, name, privileges)
        `)
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      subscription = fallback.data as typeof subscription;
    }

    if (!subscription) {
      return {
        allowed: false,
        reason: 'no_subscription',
        feature,
        redirectUrl: '/curriculum?lock=true',
      };
    }

    // Check if feature is included in subscription/package privileges
    const allowedModules = getAllowedModules(subscription);
    const pkg = Array.isArray(subscription.packages)
      ? subscription.packages[0]
      : subscription.packages as any;

    // Check if this specific feature is allowed
    const featureId = feature.id;
    const isFeatureAllowed = allowedModules.includes(featureId);

    if (!isFeatureAllowed) {
      return {
        allowed: false,
        reason: 'feature_not_included',
        feature,
        subscription: {
          status: subscription.status,
          sessionsRemaining: subscription.sessions_remaining,
          packageName: pkg?.name,
        },
        redirectUrl: '/curriculum?lock=true',
      };
    }

    return {
      allowed: true,
      feature,
      subscription: {
        status: subscription.status,
        sessionsRemaining: subscription.sessions_remaining,
        packageName: pkg?.name,
      },
    };
  }

  // Free feature
  return { allowed: true, feature };
}

/**
 * Server-side guard that redirects if access is denied
 * Use this in Server Components
 */
export async function requireContentAccess(path: string): Promise<{
  feature: ContentFeature;
  subscription: { status: string; sessionsRemaining: number } | null;
}> {
  // Demo mode: bypass all content access checks
  if (process.env.DEMO_MODE === 'true') {
    const feature = getFeatureByPath(path);
    return {
      feature: feature || CONTENT_FEATURES['placement-test'],
      subscription: null,
    };
  }

  const result = await checkContentAccess(path);

  if (!result.allowed) {
    redirect(result.redirectUrl || '/curriculum');
  }

  return {
    feature: result.feature!,
    subscription: result.subscription || null,
  };
}

/**
 * Get all content features with access status for current user
 * Useful for building navigation menus
 */
export async function getContentFeaturesWithAccess(): Promise<
  (ContentFeature & {
    hasAccess: boolean;
    reason?: AccessCheckResult['reason'];
    subscriptionStatus?: string;
  })[]
> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // Check if admin/teacher
  let isPrivileged = false;
  if (user) {
    isPrivileged = await isAdmin() || await isTeacher();
  }

  // Get subscription once
  let subscription: any = null;
  if (user && !isPrivileged) {
    const subQuery = await supabase
      .from('subscriptions')
      .select(`
        status,
        sessions_remaining,
        privileges,
        packages (id, name, privileges)
      `)
      .eq('user_id', user.id)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    subscription = subQuery.data;
    if (subQuery.error) {
      const fallback = await supabase
        .from('subscriptions')
        .select(`
          status,
          sessions_remaining,
          packages (id, name, privileges)
        `)
        .eq('user_id', user.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();
      subscription = fallback.data as typeof subscription;
    }
  }

  const allowedModules = getAllowedModules(subscription);

  return Object.values(CONTENT_FEATURES).map(feature => {
    // Admin/Teacher has access to everything
    if (isPrivileged) {
      return { ...feature, hasAccess: true, subscriptionStatus: 'privileged' };
    }

    // No auth required
    if (!feature.requiresAuth) {
      return { ...feature, hasAccess: true };
    }

    // Not logged in
    if (!user) {
      return { ...feature, hasAccess: false, reason: 'no_auth' };
    }

    // No subscription needed
    if (!feature.requiresSubscription) {
      return { ...feature, hasAccess: true };
    }

    // Check subscription
    if (!subscription) {
      return {
        ...feature,
        hasAccess: false,
        reason: 'no_subscription',
        subscriptionStatus: 'inactive'
      };
    }

    // Check if feature included
    const hasAccess = allowedModules.includes(feature.id);

    return {
      ...feature,
      hasAccess,
      reason: hasAccess ? undefined : 'feature_not_included',
      subscriptionStatus: subscription.status,
    };
  });
}

/**
 * Check multiple features at once (efficient for dashboard)
 */
export async function checkMultipleFeatures(
  featureIds: string[]
): Promise<Record<string, boolean>> {
  const results: Record<string, boolean> = {};

  // Get user context once
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    featureIds.forEach(id => {
      const feature = CONTENT_FEATURES[id];
      results[id] = feature ? !feature.requiresAuth && !feature.requiresSubscription : false;
    });
    return results;
  }

  // Check admin/teacher
  const isPrivileged = await isAdmin() || await isTeacher();
  if (isPrivileged) {
    featureIds.forEach(id => results[id] = true);
    return results;
  }

  // Get subscription
  let subQuery = await supabase
    .from('subscriptions')
    .select('status, privileges, packages(privileges)')
    .eq('user_id', user.id)
    .eq('status', 'active')
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

  let subscription = subQuery.data;
  if (subQuery.error) {
    const fallback = await supabase
      .from('subscriptions')
      .select('status, packages(privileges)')
      .eq('user_id', user.id)
      .eq('status', 'active')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    subscription = fallback.data as typeof subscription;
  }

  const allowedModules = getAllowedModules(subscription);

  featureIds.forEach(id => {
    const feature = CONTENT_FEATURES[id];
    if (!feature) {
      results[id] = false;
      return;
    }

    if (!feature.requiresSubscription) {
      results[id] = true;
      return;
    }

    results[id] = allowedModules.includes(id);
  });

  return results;
}
