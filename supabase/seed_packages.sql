-- Add description column if it doesn't exist
ALTER TABLE packages ADD COLUMN IF NOT EXISTS description TEXT;

-- Remove duplicate packages if any exist (keeping the latest one)
DELETE FROM packages a USING packages b WHERE a.id < b.id AND a.name = b.name;

-- Add unique constraint to name if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'packages_name_key') THEN
        ALTER TABLE packages ADD CONSTRAINT packages_name_key UNIQUE (name);
    END IF;
END $$;

-- Seed Packages
INSERT INTO packages (name, total_sessions, price, description)
VALUES
    ('Daily Conversation (Talk & Chill)', 5, 100000, 'Focus on fluency, natural expressions, and confidence.'),
    ('Interview Prep (Ready to Impress)', 5, 150000, 'Mock interviews, professional vocabulary, and personalized feedback.'),
    ('Presentation (Speak It Out)', 5, 150000, 'Public speaking techniques, structuring ideas, and pronunciation.'),
    ('Basic English (From Zero to Chill)', 5, 120000, 'Grammar basics, daily vocabulary, and speaking practice.')
ON CONFLICT (name) DO UPDATE 
SET 
    total_sessions = EXCLUDED.total_sessions,
    price = EXCLUDED.price,
    description = EXCLUDED.description;
