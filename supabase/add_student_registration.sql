-- SIMPLER Migration: Fix profiles table for student registration
-- Run this in Supabase SQL Editor

-- 1. Drop the constraint that's causing issues (name length check)
ALTER TABLE profiles DROP CONSTRAINT IF EXISTS username_length;

-- 2. Add role column if not exists
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'student';

-- 3. Drop and recreate the trigger function with better null handling
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
DECLARE
  user_name TEXT;
BEGIN
  -- Get name from metadata, fallback to email prefix if empty
  user_name := COALESCE(
    NULLIF(new.raw_user_meta_data->>'full_name', ''),
    NULLIF(new.raw_user_meta_data->>'name', ''),
    SPLIT_PART(new.email, '@', 1)
  );
  
  INSERT INTO public.profiles (id, full_name, avatar_url, role, updated_at)
  VALUES (
    new.id, 
    user_name,
    COALESCE(new.raw_user_meta_data->>'avatar_url', new.raw_user_meta_data->>'picture'),
    COALESCE(new.raw_user_meta_data->>'role', 'student'),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE SET
    full_name = COALESCE(EXCLUDED.full_name, profiles.full_name),
    avatar_url = COALESCE(EXCLUDED.avatar_url, profiles.avatar_url),
    role = COALESCE(profiles.role, EXCLUDED.role),
    updated_at = NOW();
  
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Recreate trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 5. Verify it worked
SELECT 'Migration complete!' as status;
