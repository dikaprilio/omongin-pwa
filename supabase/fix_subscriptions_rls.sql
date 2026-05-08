-- Allow service_role full access to subscriptions table
DROP POLICY IF EXISTS "Service role full access" ON subscriptions;
CREATE POLICY "Service role full access" ON subscriptions
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

-- Ensure authenticated users can still see their own (existing policy, reiterating for safety)
DROP POLICY IF EXISTS "Users can view own subscriptions" ON subscriptions;
CREATE POLICY "Users can view own subscriptions" ON subscriptions
    FOR SELECT
    USING (auth.uid() = user_id);
