-- Comprehensive fix for sessions table
-- This script ensures ALL required columns exist, regardless of how the table was created.

-- 1. Ensure table exists
CREATE TABLE IF NOT EXISTS sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Add all columns safely
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS student_id UUID REFERENCES students(id) ON DELETE CASCADE;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS package_id UUID REFERENCES packages(id) ON DELETE SET NULL;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS start_time TIMESTAMP WITH TIME ZONE;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS end_time TIMESTAMP WITH TIME ZONE;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'scheduled';
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS notes TEXT;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS google_event_id TEXT;
ALTER TABLE sessions ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- 3. Enable RLS
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- 4. Recreate Policies (Drop first to avoid errors)
DROP POLICY IF EXISTS "Users can view their own sessions" ON sessions;
CREATE POLICY "Users can view their own sessions" ON sessions
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own sessions" ON sessions;
CREATE POLICY "Users can insert their own sessions" ON sessions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own sessions" ON sessions;
CREATE POLICY "Users can update their own sessions" ON sessions
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own sessions" ON sessions;
CREATE POLICY "Users can delete their own sessions" ON sessions
  FOR DELETE USING (auth.uid() = user_id);

-- 5. Force schema cache reload
NOTIFY pgrst, 'reload config';
