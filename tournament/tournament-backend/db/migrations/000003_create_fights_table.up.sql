CREATE TABLE IF NOT EXISTS fights(
  id serial PRIMARY KEY,
  red_fighter_id INT NOT NULL,
  blue_fighter_id INT NOT NULL,
  attack_judge_1_id INT NOT NULL,
  attack_judge_2_id INT NOT NULL,
  attack_judge_3_id INT NOT NULL,
  defence_judge_1_id INT NOT NULL,
  defence_judge_2_id INT NOT NULL,
  defence_judge_3_id INT NOT NULL,
  max_rounds INT NOT NULL,
  round_duration INT NOT NULL,
  defence_points_for_action INT NOT NULL,
  attack_points_for_action INT NOT NULL,
  status INT NOT NULL DEFAULT 0,
  started_at TIMESTAMP NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

