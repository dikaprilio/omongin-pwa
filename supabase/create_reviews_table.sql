-- Create reviews table for student feedback on tutors
create table reviews (
    id uuid default gen_random_uuid() primary key,
    tutor_id uuid references profiles(id) on delete cascade not null,
    student_name text not null,
    rating smallint not null check (
        rating >= 1
        and rating <= 7
    ),
    comment text,
    -- Saran (optional)
    testimoni text,
    -- Testimoni (optional)
    created_at timestamptz default now() not null
);
-- Create index for faster tutor-based queries
create index idx_reviews_tutor_id on reviews(tutor_id);
create index idx_reviews_created_at on reviews(created_at desc);
-- Set up Row Level Security (RLS)
alter table reviews enable row level security;
-- Anyone can insert reviews (public guest form, no auth required)
create policy "Anyone can insert reviews" on reviews for
insert with check (true);
-- Admins can read all reviews
create policy "Admins can read all reviews" on reviews for
select using (
        exists (
            select 1
            from profiles
            where profiles.id = auth.uid()
                and profiles.role = 'super_admin'
        )
    );
-- Tutors can read their own reviews
create policy "Tutors can read own reviews" on reviews for
select using (auth.uid() = tutor_id);