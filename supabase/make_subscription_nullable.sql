-- Make subscription_id nullable to allow ad-hoc sessions
ALTER TABLE sessions ALTER COLUMN subscription_id DROP NOT NULL;

-- Force schema cache reload
NOTIFY pgrst, 'reload config';
