-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Add columns if they don't exist (idempotent)
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS student_id uuid REFERENCES students(id) ON DELETE CASCADE;
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS package_id uuid REFERENCES packages(id) ON DELETE SET NULL;
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS sessions_total INTEGER DEFAULT 0;
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS sessions_remaining INTEGER DEFAULT 0;
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'cancelled'));

-- Enable RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
DROP POLICY IF EXISTS "Users can view own subscriptions" ON subscriptions;
CREATE POLICY "Users can view own subscriptions" ON subscriptions
    FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own subscriptions" ON subscriptions;
CREATE POLICY "Users can insert own subscriptions" ON subscriptions
    FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own subscriptions" ON subscriptions;
CREATE POLICY "Users can update own subscriptions" ON subscriptions
    FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own subscriptions" ON subscriptions;
CREATE POLICY "Users can delete own subscriptions" ON subscriptions
    FOR DELETE USING (auth.uid() = user_id);
