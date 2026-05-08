-- Create table for reading drills
create table if not exists public.reading_drills (
    id uuid not null default gen_random_uuid (),
    content text not null,
    level text null,
    created_at timestamp with time zone not null default now(),
    constraint reading_drills_pkey primary key (id)
);

-- Create table for tracking user progress
create table if not exists public.user_reading_progress (
    id uuid not null default gen_random_uuid (),
    user_id uuid not null,
    drill_id uuid not null,
    wpm integer not null,
    success boolean not null default false,
    completed_at timestamp with time zone not null default now(),
    constraint user_reading_progress_pkey primary key (id),
    constraint user_reading_progress_drill_id_fkey foreign key (drill_id) references reading_drills (id) on delete cascade,
    constraint user_reading_progress_user_id_fkey foreign key (user_id) references auth.users (id) on delete cascade
);

-- Enable RLS
alter table public.reading_drills enable row level security;
alter table public.user_reading_progress enable row level security;

-- Policies for reading_drills (Public read, Admin write)
create policy "Allow public read access to reading_drills"
    on public.reading_drills
    for select
    to public
    using (true);

-- Policies for user_reading_progress (User can read/write their own)
create policy "Users can view their own progress"
    on public.user_reading_progress
    for select
    to authenticated
    using (auth.uid() = user_id);

create policy "Users can insert their own progress"
    on public.user_reading_progress
    for insert
    to authenticated
    with check (auth.uid() = user_id);

-- Seed Data (30 Drills: 10 Easy, 20 Medium)
-- Designed for 10 days of: 1 Easy + 2 Medium per day
insert into public.reading_drills (content, level) values
-- EASY (10 items)
('The quick brown fox jumps over the lazy dog while the sun sets slowly behind the green hills.', 'Easy'),
('Reading is a window to the world, allowing us to travel anywhere without moving our feet.', 'Easy'),
('Practice makes perfect in every skill, so keep working hard every single day to achieve your goals.', 'Easy'),
('Consistency is key to mastering any language, just like watering a plant daily.', 'Easy'),
('The sun rises in the east and sets in the west, marking the passage of time for everyone.', 'Easy'),
('Simple acts of kindness can make a big difference in someone else''s day.', 'Easy'),
('Walking in nature helps clear the mind and brings a sense of peace and tranquility.', 'Easy'),
('Learning to listen is just as important as learning to speak clearly and confidently.', 'Easy'),
('A good night''s sleep is essential for a healthy body and a sharp mind.', 'Easy'),
('Small steps taken every day add up to big results over a long period of time.', 'Easy'),

-- MEDIUM (20 items)
('A journey of a thousand miles begins with a single step, taken with courage and hope for the future.', 'Medium'),
('To be or not to be, that is the question we must ask ourselves every morning we wake.', 'Medium'),
('All that glitters is not gold, often the true treasure lies hidden beneath the surface of things.', 'Medium'),
('Actions speak louder than words, showing who you truly are through what you do rather than say.', 'Medium'),
('Better late than never, but better never late if you want to be respected by your peers.', 'Medium'),
('Birds of a feather flock together, finding comfort in those who share their dreams and values.', 'Medium'),
('Cleanliness is next to godliness, reflecting a pure mind and a disciplined spirit in daily life.', 'Medium'),
('Don’t count your chickens before they hatch, patience is a virtue we must cultivate diligently.', 'Medium'),
('Every cloud has a silver lining, reminding us that hope exists even in the darkest of times.', 'Medium'),
('Fortune favors the bold, rewarding those who dare to dream big and take calculated risks.', 'Medium'),
('Haste makes waste, so take your time to do things right the first time around.', 'Medium'),
('Ignorance is bliss, until the truth comes knocking at your door unexpectedly one day.', 'Medium'),
('Knowledge is power, empowering you to change your life and the world around you significantly.', 'Medium'),
('Laughter is the best medicine, healing the soul and brightening the darkest days of our lives.', 'Medium'),
('Necessity is the mother of invention, driving human progress through creativity and urgent need.', 'Medium'),
('No pain, no gain; success requires sacrifice and the willingness to endure hardship and struggle.', 'Medium'),
('Rome wasn’t built in a day, and neither is a legacy worth remembering forever by others.', 'Medium'),
('Silence is golden, offering a sanctuary for peace and deep reflection in a chaotic world.', 'Medium'),
('The early bird catches the worm, proving that preparation and punctuality lead to success.', 'Medium'),
('When in Rome, do as the Romans do, respecting local customs and traditions always matters.', 'Medium');
