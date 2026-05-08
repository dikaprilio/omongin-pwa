-- Add expires_at column to subscriptions table for duration tracking
ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS expires_at TIMESTAMP WITH TIME ZONE;
