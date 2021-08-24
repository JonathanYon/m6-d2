-- DROP TABLE IF EXISTS public.products CASCADE;
-- DROP TABLE IF EXISTS public.reviews CASCADE;

CREATE TABLE 
	IF NOT EXISTS
		stuffs(
			id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			name VARCHAR(50) NOT NULL,
			description VARCHAR (255) NOT NULL,
			brand VARCHAR(50) NOT NULL,
			image_url TEXT NOT NULL,
			price NUMERIC NOT NULL,
			category VARCHAR(50) NOT NULL,
			created_at TIMESTAMPTZ DEFAULT NOW(),
			updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE 
	IF NOT EXISTS
		feedbacks(
			id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
			comment VARCHAR(255) NOT NULL,
			rate NUMERIC NOT NULL, -- make max 5
			product_id INTEGER REFERENCES authors ON DELETE CASCADE,
			created_at TIMESTAMPTZ DEFAULT NOW(),
			updated_at TIMESTAMPTZ DEFAULT NOW()
);			
