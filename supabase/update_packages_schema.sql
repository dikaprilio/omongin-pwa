-- Add flexible privileges column for future feature flags
ALTER TABLE packages 
ADD COLUMN IF NOT EXISTS privileges JSONB NOT NULL DEFAULT '{}';

-- Add promo flag
ALTER TABLE packages 
ADD COLUMN IF NOT EXISTS is_promo BOOLEAN NOT NULL DEFAULT FALSE;

-- Ensure price and description exist (idempotent due to IF NOT EXISTS)
ALTER TABLE packages 
ADD COLUMN IF NOT EXISTS price INTEGER NOT NULL DEFAULT 0;

ALTER TABLE packages 
ADD COLUMN IF NOT EXISTS description TEXT;

-- RLS Policies for Admin Management
-- 1. Everyone can view packages
DROP POLICY IF EXISTS "Anyone can view packages" ON packages;
CREATE POLICY "Anyone can view packages" ON packages
    FOR SELECT USING (true);

-- 2. Only admins can insert/update/delete
-- Note: 'auth.uid()' check for admin is usually handled by your app logic or a custom claim/function. 
-- Since we use createAdminClient() on the server, we bypass RLS for admin operations.
-- However, for client-side safety (if ever exposed), we can add a policy if you have an admin check function.
-- For now, we'll rely on the server-side admin client for mutations.
