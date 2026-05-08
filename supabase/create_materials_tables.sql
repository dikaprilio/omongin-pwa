-- Drop existing tables to ensure clean state
drop table if exists materials cascade;
drop table if exists folders cascade;

-- Create folders table
create table folders (
    id uuid default gen_random_uuid() primary key,
    user_id uuid references auth.users(id) on delete cascade not null,
    name text not null,
    parent_id uuid references folders(id) on delete cascade,
    color text default 'blue',
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create materials table
create table materials (
    id uuid default gen_random_uuid() primary key,
    folder_id uuid references folders(id) on delete cascade,
    user_id uuid references auth.users(id) on delete cascade not null,
    title text not null,
    type text check (type in ('gdrive', 'canva', 'youtube', 'link')) not null,
    url text not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table folders enable row level security;
alter table materials enable row level security;

-- Policies for folders
create policy "Users can view their own folders"
    on folders for select
    using (auth.uid() = user_id);

create policy "Users can insert their own folders"
    on folders for insert
    with check (auth.uid() = user_id);

create policy "Users can update their own folders"
    on folders for update
    using (auth.uid() = user_id);

create policy "Users can delete their own folders"
    on folders for delete
    using (auth.uid() = user_id);

-- Policies for materials
create policy "Users can view their own materials"
    on materials for select
    using (auth.uid() = user_id);

create policy "Users can insert their own materials"
    on materials for insert
    with check (auth.uid() = user_id);

create policy "Users can update their own materials"
    on materials for update
    using (auth.uid() = user_id);

create policy "Users can delete their own materials"
    on materials for delete
    using (auth.uid() = user_id);
