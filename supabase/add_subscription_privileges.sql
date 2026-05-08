-- Add privileges JSONB column to subscriptions for per-user module access overrides
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS privileges JSONB DEFAULT '{}'::jsonb;
