CREATE TABLE IF NOT EXISTS rounds(
   id serial PRIMARY KEY,
   fight_id INT NOT NULL,
   number INT NOT NULL,
   status INT NOT NULL DEFAULT 0,
   started_at TIMESTAMP ,
   finished_at TIMESTAMP ,
   created_at TIMESTAMP NOT NULL,
   updated_at TIMESTAMP NOT NULL
);