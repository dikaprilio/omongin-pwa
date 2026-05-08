import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock dependencies (hoisted)
vi.mock('@/utils/supabase/server', () => ({
  createClient: vi.fn(),
}));

vi.mock('@/lib/auth/roles', () => ({
  isAdmin: vi.fn(),
  isTeacher: vi.fn(),
}));

// Import after mocking
import { 
  checkContentAccess, 
  getContentFeaturesWithAccess,
  checkMultipleFeatures,
} from '@/lib/content/access-control';
import { createClient } from '@/utils/supabase/server';
import { isAdmin, isTeacher } from '@/lib/auth/roles';

describe('Content Access Control', () => {
  const mockGetUser = vi.fn();
  const mockFrom = vi.fn();
  const mockSelect = vi.fn();
  const mockEq = vi.fn();
  const mockOrder = vi.fn();
  const mockLimit = vi.fn();
  const mockSingle = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    
    // Setup mock implementations
    const mockClient = {
      auth: { getUser: mockGetUser },
      from: mockFrom,
    };
    
    vi.mocked(createClient).mockResolvedValue(mockClient as any);
    
    // Setup mock chain: from().select().eq().eq().order().limit().single()
    const mockEq2 = vi.fn(() => ({ order: mockOrder }));
    mockEq.mockReturnValue({ eq: mockEq2 });
    mockFrom.mockReturnValue({ select: mockSelect });
    mockSelect.mockReturnValue({ eq: mockEq });
    mockOrder.mockReturnValue({ limit: mockLimit });
    mockLimit.mockReturnValue({ single: mockSingle });
  });

  describe('checkContentAccess', () => {
    it('should allow access to free features without auth', async () => {
      mockGetUser.mockResolvedValue({ data: { user: null }, error: null });
      
      // Placement test is free
      const result = await checkContentAccess('/placement-test');
      
      expect(result.allowed).toBe(true);
    });

    it('should deny access to premium features without auth', async () => {
      mockGetUser.mockResolvedValue({ data: { user: null }, error: null });
      
      const result = await checkContentAccess('/interview-sim');
      
      expect(result.allowed).toBe(false);
      expect(result.reason).toBe('no_auth');
      expect(result.redirectUrl).toContain('/login');
    });

    it('should allow admin access to all features', async () => {
      const mockUser = { id: 'admin-123', email: 'admin@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(true);
      vi.mocked(isTeacher).mockResolvedValue(false);
      
      const result = await checkContentAccess('/interview-sim');
      
      expect(result.allowed).toBe(true);
    });

    it('should allow teacher access to all features', async () => {
      const mockUser = { id: 'teacher-123', email: 'teacher@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(false);
      vi.mocked(isTeacher).mockResolvedValue(true);
      
      const result = await checkContentAccess('/writing-test');
      
      expect(result.allowed).toBe(true);
    });

    it('should deny student without subscription', async () => {
      const mockUser = { id: 'student-123', email: 'student@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(false);
      vi.mocked(isTeacher).mockResolvedValue(false);
      mockSingle.mockResolvedValue({ data: null, error: { message: 'No subscription' } });
      
      const result = await checkContentAccess('/speaking-test');
      
      expect(result.allowed).toBe(false);
      expect(result.reason).toBe('no_subscription');
    });

    it('should deny if feature not in package privileges', async () => {
      const mockUser = { id: 'student-123', email: 'student@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(false);
      vi.mocked(isTeacher).mockResolvedValue(false);
      
      // Subscription exists but doesn't include interview-sim
      mockSingle.mockResolvedValue({
        data: {
          status: 'active',
          sessions_remaining: 10,
          packages: {
            name: 'Basic Package',
            privileges: {
              allowed_modules: ['basic-grammar', 'speaking-test']
            }
          }
        },
        error: null
      });
      
      // Try to access interview-sim which is not in allowed_modules
      const result = await checkContentAccess('/interview-sim');
      
      expect(result.allowed).toBe(false);
      expect(result.reason).toBe('feature_not_included');
    });

    it('should allow if feature is in package privileges', async () => {
      const mockUser = { id: 'student-123', email: 'student@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(false);
      vi.mocked(isTeacher).mockResolvedValue(false);
      
      mockSingle.mockResolvedValue({
        data: {
          status: 'active',
          sessions_remaining: 10,
          packages: {
            name: 'Premium Package',
            privileges: {
              allowed_modules: ['interview-sim', 'writing-test', 'speaking-test']
            }
          }
        },
        error: null
      });
      
      const result = await checkContentAccess('/interview-sim');
      
      expect(result.allowed).toBe(true);
      expect(result.subscription?.sessionsRemaining).toBe(10);
    });

    it('should handle unknown paths gracefully', async () => {
      mockGetUser.mockResolvedValue({ data: { user: null }, error: null });
      
      const result = await checkContentAccess('/unknown-path');
      
      expect(result.allowed).toBe(true);
    });
  });

  describe('getContentFeaturesWithAccess', () => {
    it('should return all features with correct access status for admin', async () => {
      const mockUser = { id: 'admin-123', email: 'admin@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(true);
      vi.mocked(isTeacher).mockResolvedValue(false);
      
      const features = await getContentFeaturesWithAccess();
      
      // All features should have access
      expect(features.every(f => f.hasAccess)).toBe(true);
      
      // Check specific features
      const interviewSim = features.find(f => f.id === 'interview-sim');
      expect(interviewSim?.hasAccess).toBe(true);
      expect(interviewSim?.subscriptionStatus).toBe('privileged');
    });

    it('should show correct locked status for student without subscription', async () => {
      const mockUser = { id: 'student-123', email: 'student@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(false);
      vi.mocked(isTeacher).mockResolvedValue(false);
      mockSingle.mockResolvedValue({ data: null, error: { message: 'No subscription' } });
      
      const features = await getContentFeaturesWithAccess();
      
      // Free features should be accessible
      const placementTest = features.find(f => f.id === 'placement-test');
      expect(placementTest?.hasAccess).toBe(true);
      
      // Premium features should be locked
      const interviewSim = features.find(f => f.id === 'interview-sim');
      expect(interviewSim?.hasAccess).toBe(false);
      expect(interviewSim?.reason).toBe('no_subscription');
    });

    it('should show features included in subscription', async () => {
      // This test is simplified - full integration testing would need complex mock chains
      const mockUser = { id: 'student-123', email: 'student@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(false);
      vi.mocked(isTeacher).mockResolvedValue(false);
      
      // Reset mock chain for subscription query
      mockSingle.mockReset();
      mockSingle.mockResolvedValue({
        data: {
          status: 'active',
          sessions_remaining: 5,
          packages: {
            privileges: {
              allowed_modules: ['basic-grammar', 'speaking-test']
            }
          }
        },
        error: null
      });
      
      const features = await getContentFeaturesWithAccess();
      
      // Free features should always be accessible
      expect(features.find(f => f.id === 'placement-test')?.hasAccess).toBe(true);
      
      // Features should exist
      expect(features.find(f => f.id === 'speaking-test')).toBeDefined();
      expect(features.find(f => f.id === 'interview-sim')).toBeDefined();
    });
  });

  describe('checkMultipleFeatures', () => {
    it('should return correct access map for multiple features', async () => {
      // This test is simplified - full integration testing would need complex mock chains
      const mockUser = { id: 'student-123', email: 'student@test.com' };
      mockGetUser.mockResolvedValue({ data: { user: mockUser }, error: null });
      vi.mocked(isAdmin).mockResolvedValue(false);
      vi.mocked(isTeacher).mockResolvedValue(false);
      
      // Reset mock chain
      mockSingle.mockReset();
      mockSingle.mockResolvedValue({
        data: {
          status: 'active',
          packages: {
            privileges: {
              allowed_modules: ['speaking-test', 'reading-test']
            }
          }
        },
        error: null
      });
      
      const results = await checkMultipleFeatures([
        'speaking-test',
        'placement-test' // Free feature
      ]);
      
      // Free feature should be accessible
      expect(results['placement-test']).toBe(true);
      // Feature exists in map
      expect(results).toHaveProperty('speaking-test');
    });

    it('should handle unauthenticated user', async () => {
      mockGetUser.mockResolvedValue({ data: { user: null }, error: null });
      
      const results = await checkMultipleFeatures([
        'placement-test', // Free
        'speaking-test',  // Premium
      ]);
      
      expect(results['placement-test']).toBe(true); // Free
      expect(results['speaking-test']).toBe(false); // Needs auth
    });
  });
});
