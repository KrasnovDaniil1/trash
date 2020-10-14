CREATE TABLE IF NOT EXISTS actions(
  id serial PRIMARY KEY,
  fight_id INT NOT NULL,
  fighter_id INT NOT NULL,
  judge_id INT NOT NULL,
  round_id INT NOT NULL,
  points INT NOT NULL DEFAULT 0,
  action_type INT NOT NULL DEFAULT 0,
  mistake_type INT NOT NULL DEFAULT 0,
  is_mistake  boolean not null default false,
  active  boolean not null default false,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);