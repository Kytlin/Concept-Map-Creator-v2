CREATE TABLE collections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(50) NOT NULL,
    summary TEXT NOT NULL,
    tag VARCHAR(30) NOT NULL,
    UNIQUE(id)
);