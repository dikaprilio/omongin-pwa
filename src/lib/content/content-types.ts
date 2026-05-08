/**
 * Content Types & Feature Configuration
 * 
 * This file defines all premium content features and their access rules.
 * Used for content gating and payment integration.
 */

export type ContentCategory = 'assessment' | 'practice' | 'simulation' | 'material';

export interface ContentFeature {
  id: string;
  name: string;
  description: string;
  category: ContentCategory;
  path: string;
  icon?: string;

  // Access control
  requiresAuth: boolean;
  requiresSubscription: boolean;
  allowedPackages?: string[]; // Package IDs that include this feature

  // Payment/Pricing
  isPaidFeature: boolean;
  price?: number; // IDR, for one-time purchases

  // Display
  isPublic: boolean; // Show in menu even if locked?
  lockedMessage?: string;
}

// All available content features
export const CONTENT_FEATURES: Record<string, ContentFeature> = {
  // Assessments
  'placement-test': {
    id: 'placement-test',
    name: 'Placement Test',
    description: 'Test your English level to get started',
    category: 'assessment',
    path: '/placement-test',
    requiresAuth: false,
    requiresSubscription: false,
    isPaidFeature: false,
    isPublic: true,
  },

  'speaking-test': {
    id: 'speaking-test',
    name: 'Speaking Test',
    description: 'AI-powered speaking assessment',
    category: 'assessment',
    path: '/speaking-test',
    requiresAuth: true,
    requiresSubscription: false, // Free for demo
    isPaidFeature: false,
    isPublic: true,
  },

  'reading-test': {
    id: 'reading-test',
    name: 'RSVP Reading Test',
    description: 'Speed reading assessment with RSVP',
    category: 'assessment',
    path: '/reading-test',
    requiresAuth: true,
    requiresSubscription: false, // Free for demo
    isPaidFeature: false,
    isPublic: true,
  },

  'speaking-practice': {
    id: 'speaking-practice',
    name: 'Speaking Practice',
    description: 'Practice specific text and pronunciation',
    category: 'practice',
    path: '/speaking-practice',
    requiresAuth: true,
    requiresSubscription: false, // Free for demo
    isPaidFeature: false,
    isPublic: true,
  },

  // Simulations
  'interview-sim': {
    id: 'interview-sim',
    name: 'Interview Simulation',
    description: 'Practice job interviews with AI',
    category: 'simulation',
    path: '/interview-sim',
    requiresAuth: true,
    requiresSubscription: false, // Free for demo
    isPaidFeature: false,
    isPublic: true,
  },

  'writing-test': {
    id: 'writing-test',
    name: 'Writing Test',
    description: 'Academic & business writing practice',
    category: 'assessment',
    path: '/writing-test',
    requiresAuth: true,
    requiresSubscription: true,
    isPaidFeature: true,
    isPublic: true,
    lockedMessage: 'Subscribe to unlock writing tests',
  },

  // Practice Materials
  'basic-grammar': {
    id: 'basic-grammar',
    name: 'Basic Grammar',
    description: 'Fundamental grammar lessons',
    category: 'material',
    path: '/curriculum/basic-grammar',
    requiresAuth: true,
    requiresSubscription: false, // Free
    isPaidFeature: false,
    isPublic: true,
  },

  'basic-kids': {
    id: 'basic-kids',
    name: 'Kids English',
    description: 'English for young learners',
    category: 'material',
    path: '/curriculum/basic-kids',
    requiresAuth: true,
    requiresSubscription: true,
    isPaidFeature: true,
    isPublic: true,
    lockedMessage: 'Subscribe to access kids curriculum',
  },

  'adult-speak': {
    id: 'adult-speak',
    name: 'Adult Speaking',
    description: 'Conversational English for adults',
    category: 'material',
    path: '/curriculum/adult-speak',
    requiresAuth: true,
    requiresSubscription: false, // Free for demo
    isPaidFeature: false,
    isPublic: true,
  },

  'speaking-kids': {
    id: 'speaking-kids',
    name: 'Speaking Kids',
    description: 'English speaking for young learners',
    category: 'material',
    path: '/curriculum/kids-speak',
    requiresAuth: true,
    requiresSubscription: true,
    isPaidFeature: true,
    isPublic: true,
    lockedMessage: 'Subscribe to access kids speaking',
  },

  'presentation': {
    id: 'presentation',
    name: 'Presentation Skills',
    description: 'Business presentation training',
    category: 'material',
    path: '/curriculum/presentation',
    requiresAuth: true,
    requiresSubscription: true,
    isPaidFeature: true,
    isPublic: true,
    lockedMessage: 'Subscribe to access presentation course',
  },

  'interview-prep': {
    id: 'interview-prep',
    name: 'Interview Preparation',
    description: 'Job interview coaching',
    category: 'material',
    path: '/curriculum/interview',
    requiresAuth: true,
    requiresSubscription: true,
    isPaidFeature: true,
    isPublic: true,
    lockedMessage: 'Subscribe to access interview prep',
  },
};

// Helper functions
export function getFeatureByPath(path: string): ContentFeature | undefined {
  return Object.values(CONTENT_FEATURES).find(f =>
    path === f.path || path.startsWith(f.path + '/')
  );
}

export function getFeatureById(id: string): ContentFeature | undefined {
  return CONTENT_FEATURES[id];
}

export function getFeaturesByCategory(category: ContentCategory): ContentFeature[] {
  return Object.values(CONTENT_FEATURES).filter(f => f.category === category);
}

export function getPublicFeatures(): ContentFeature[] {
  return Object.values(CONTENT_FEATURES).filter(f => f.isPublic);
}

export function getPremiumFeatures(): ContentFeature[] {
  return Object.values(CONTENT_FEATURES).filter(f => f.isPaidFeature);
}

export function getFreeFeatures(): ContentFeature[] {
  return Object.values(CONTENT_FEATURES).filter(f => !f.isPaidFeature);
}
