-- Table for SD Jagakarsa on-site speaking assessment results
-- Shared between assessment device (phone) and ranking display (laptop)
CREATE TABLE IF NOT EXISTS sd_jagakarsa_results (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    event_date date NOT NULL DEFAULT CURRENT_DATE,
    absen smallint NOT NULL CHECK (absen >= 1 AND absen <= 35),
    status text NOT NULL CHECK (status IN ('done', 'absent')),
    scores int[] DEFAULT '{}',
    accuracy_scores int[] DEFAULT '{}',
    fluency_scores int[] DEFAULT '{}',
    average_score int GENERATED ALWAYS AS (
        CASE WHEN array_length(scores, 1) > 0
             THEN (scores[1] + COALESCE(scores[2], 0) + COALESCE(scores[3], 0)) / array_length(scores, 1)
             ELSE 0 END
    ) STORED,
    words jsonb DEFAULT '[]',
    feedback jsonb DEFAULT '[]',
    created_at timestamptz DEFAULT now() NOT NULL,
    updated_at timestamptz DEFAULT now() NOT NULL,
    UNIQUE(event_date, absen)
);

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_sd_jagakarsa_results_updated_at
    BEFORE UPDATE ON sd_jagakarsa_results
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Indexes for fast ranking queries
CREATE INDEX IF NOT EXISTS idx_sd_jagakarsa_event_date ON sd_jagakarsa_results(event_date DESC);
CREATE INDEX IF NOT EXISTS idx_sd_jagakarsa_avg_score ON sd_jagakarsa_results(event_date DESC, average_score DESC);

-- Row Level Security: public event, no auth required
ALTER TABLE sd_jagakarsa_results ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public insert sd_jagakarsa" ON sd_jagakarsa_results
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public select sd_jagakarsa" ON sd_jagakarsa_results
    FOR SELECT USING (true);

CREATE POLICY "Public update sd_jagakarsa" ON sd_jagakarsa_results
    FOR UPDATE USING (true);
