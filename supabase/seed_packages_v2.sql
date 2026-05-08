-- 1. clear existing packages (and dependent subscriptions if needed, handled by cascade usually if FK exists, otherwise just packages)
TRUNCATE TABLE packages CASCADE;

-- 2. Insert the 6 curriculum packages
-- Note: Prices are based on ClassSection.tsx
INSERT INTO packages (name, price, total_sessions, description, privileges, is_promo)
VALUES
(
    'Speaking Pro (Adults)', 
    160000, 
    4, 
    'Master natural English for work, travel, and social life.', 
    '{"allowed_modules": ["speaking-adults"]}', 
    false
),
(
    'Speaking Super (Kids)', 
    160000, 
    4, 
    'Fun and interactive lessons for young learners.', 
    '{"allowed_modules": ["speaking-kids"]}', 
    false
),
(
    'Basic English (Adults)', 
    200000, 
    4, 
    'Build a strong foundation in grammar and vocabulary.', 
    '{"allowed_modules": ["basic-adults"]}', 
    false
),
(
    'Basic English (Kids)', 
    200000, 
    4, 
    'Fun grammar lessons designed for children.', 
    '{"allowed_modules": ["basic-kids"]}', 
    false
),
(
    'Career Prep (Interview)', 
    225000, 
    4, 
    'Ace your job interviews with confidence.', 
    '{"allowed_modules": ["interview"]}', 
    false
),
(
    'Presentation Skills', 
    160000, 
    4, 
    'Deliver impactful presentations and speeches.', 
    '{"allowed_modules": ["presentation"]}', 
    false
);

-- 3. Fix RLS Policies
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;

-- Allow service_role (Admin API) full access
DROP POLICY IF EXISTS "Service role full access" ON packages;
CREATE POLICY "Service role full access" ON packages
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Allow everyone to view
DROP POLICY IF EXISTS "Anyone can view packages" ON packages;
CREATE POLICY "Anyone can view packages" ON packages
    FOR SELECT
    USING (true);

-- Optional: Allow authenticated admins to mutate if needed (though we use service_role usually)
-- Can add later if needed.
