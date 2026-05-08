'use client';

import { type ReactNode } from 'react';
import Link from 'next/link';
import { Lock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type ContentFeature } from '@/lib/content/content-types';

interface GatedContentProps {
  feature: ContentFeature;
  hasAccess: boolean;
  isLoading?: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * Wrapper component that shows locked state or content based on access
 */
export function GatedContent({
  feature,
  hasAccess,
  isLoading = false,
  children,
  fallback,
}: GatedContentProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse">
        <div className="h-32 bg-muted rounded-lg" />
      </div>
    );
  }

  if (hasAccess) {
    return <>{children}</>;
  }

  // Custom fallback if provided
  if (fallback) {
    return <>{fallback}</>;
  }

  // Default locked state
  return (
    <Card className="border-dashed border-2 bg-muted/30">
      <CardHeader className="text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Lock className="w-6 h-6 text-primary" />
        </div>
        <CardTitle>{feature.name}</CardTitle>
        <CardDescription>{feature.lockedMessage || 'Premium content'}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground text-center max-w-sm">
          Upgrade your subscription to access {feature.name.toLowerCase()} and other premium features.
        </p>
        <Link href="/curriculum?lock=true">
          <Button className="gap-2">
            <Sparkles className="w-4 h-4" />
            Unlock Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

interface FeatureCardProps {
  feature: ContentFeature & { hasAccess: boolean };
  onClick?: () => void;
}

/**
 * Card component for displaying a feature with its locked/unlocked state
 */
export function FeatureCard({ feature, onClick }: FeatureCardProps) {
  const isLocked = !feature.hasAccess && feature.isPaidFeature;

  return (
    <Card 
      className={`relative overflow-hidden transition-all hover:shadow-md ${
        isLocked ? 'opacity-75' : ''
      }`}
      onClick={onClick}
    >
      {isLocked && (
        <div className="absolute top-2 right-2">
          <Lock className="w-4 h-4 text-muted-foreground" />
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-lg">{feature.name}</CardTitle>
        <CardDescription className="line-clamp-2">
          {feature.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={feature.path}>
          <Button 
            variant={isLocked ? "outline" : "default"} 
            className="w-full"
            disabled={isLocked}
          >
            {isLocked ? 'Locked' : 'Access'}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

interface PremiumBadgeProps {
  className?: string;
}

/**
 * Badge to indicate premium content
 */
export function PremiumBadge({ className }: PremiumBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-white ${className}`}>
      <Sparkles className="w-3 h-3" />
      Premium
    </span>
  );
}
