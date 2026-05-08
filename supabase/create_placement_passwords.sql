-- Placement test password table
-- Passwords auto-expire after 24 hours, admin can view and reset

create table if not exists placement_passwords (
  id uuid default gen_random_uuid() primary key,
  password text not null, -- Plain text for admin viewing
  password_hash text not null, -- Bcrypt hash for verification
  created_at timestamptz default now(),
  expires_at timestamptz not null,
  created_by uuid references auth.users(id),
  is_active boolean default true
);

-- Create index for faster lookups
create index if not exists idx_placement_passwords_active 
  on placement_passwords(is_active, expires_at);

-- RLS: Only admins can manage passwords
alter table placement_passwords enable row level security;

create policy "Admins can manage placement passwords"
  on placement_passwords for all
  using (
    exists (
      select 1 from profiles
      where profiles.id = auth.uid()
      and profiles.role = 'super_admin'
    )
  );

-- Function to auto-deactivate expired passwords
create or replace function deactivate_expired_placement_passwords()
returns trigger as $$
begin
  update placement_passwords 
  set is_active = false 
  where is_active = true 
  and expires_at < now();
  return null;
end;
$$ language plpgsql security definer;
