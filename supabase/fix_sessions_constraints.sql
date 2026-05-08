-- Relax constraints on sessions table to allow new scheduling flow
-- We are moving to start_time/end_time and don't require subscriptions yet

-- 1. Make date_time nullable (we use start_time now)
ALTER TABLE sessions ALTER COLUMN date_time DROP NOT NULL;

-- 2. Make subscription_id nullable (if not already)
ALTER TABLE sessions ALTER COLUMN subscription_id DROP NOT NULL;

-- 3. Force schema cache reload
NOTIFY pgrst, 'reload config';
