-- 1. Add user_id column to students and packages
ALTER TABLE students ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);
ALTER TABLE packages ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);

-- 2. Enable RLS (already enabled, but good to ensure)
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;

-- 3. Drop existing insecure/incomplete policies
DROP POLICY IF EXISTS "Allow public read" ON students;
DROP POLICY IF EXISTS "Allow public read" ON packages;
DROP POLICY IF EXISTS "Users can view own students" ON students;
DROP POLICY IF EXISTS "Users can insert own students" ON students;
DROP POLICY IF EXISTS "Users can update own students" ON students;
DROP POLICY IF EXISTS "Users can delete own students" ON students;
DROP POLICY IF EXISTS "Users can view own packages" ON packages;
DROP POLICY IF EXISTS "Users can insert own packages" ON packages;
DROP POLICY IF EXISTS "Users can update own packages" ON packages;
DROP POLICY IF EXISTS "Users can delete own packages" ON packages;

-- 4. Create comprehensive RLS policies for STUDENTS
-- Users can only see their own students
CREATE POLICY "Users can view own students" ON students
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own students (and automatically set user_id)
CREATE POLICY "Users can insert own students" ON students
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own students
CREATE POLICY "Users can update own students" ON students
  FOR UPDATE USING (auth.uid() = user_id);

-- Users can delete their own students
CREATE POLICY "Users can delete own students" ON students
  FOR DELETE USING (auth.uid() = user_id);


-- 5. Create comprehensive RLS policies for PACKAGES
-- Users can only see their own packages
CREATE POLICY "Users can view own packages" ON packages
  FOR SELECT USING (auth.uid() = user_id);

-- Users can insert their own packages
CREATE POLICY "Users can insert own packages" ON packages
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can update their own packages
CREATE POLICY "Users can update own packages" ON packages
  FOR UPDATE USING (auth.uid() = user_id);

-- Users can delete their own packages
CREATE POLICY "Users can delete own packages" ON packages
  FOR DELETE USING (auth.uid() = user_id);
