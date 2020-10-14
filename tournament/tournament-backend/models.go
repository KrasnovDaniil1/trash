package main

import (
	//"database/sql"
	"time"
)

type Fighter struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name" validate:"required"`
	LastName  string `json:"last_name" validate:"required"`
}

type Judge struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name" validate:"required"`
	LastName  string `json:"last_name" validate:"required"`
}

type Fight struct {
	ID                     int        `json:"id"`
	RedFighterID           int        `json:"red_fighter_id" validate:"required"`
	RedFighter             Fighter    `json:"red_fighter,omitempty" validate:"-"`
	BlueFighterID          int        `json:"blue_fighter_id" validate:"required"`
	BlueFighter            Fighter    `json:"blue_fighter,omitempty" validate:"-"`
	AttackJudge1ID         int        `json:"attack_judge_1_id" validate:"required"`
	AttackJudge1           Judge      `json:"attack_judge_1,omitempty" validate:"-"`
	AttackJudge2ID         int        `json:"attack_judge_2_id" validate:"required"`
	AttackJudge2           Judge      `json:"attack_judge_2,omitempty" validate:"-"`
	AttackJudge3ID         int        `json:"attack_judge_3_id" validate:"required"`
	AttackJudge3           Judge      `json:"attack_judge_3,omitempty" validate:"-"`
	DefenceJudge1ID        int        `json:"defence_judge_1_id" validate:"required"`
	DefenceJudge1          Judge      `json:"defence_judge_1,omitempty" validate:"-"`
	DefenceJudge2ID        int        `json:"defence_judge_2_id" validate:"required"`
	DefenceJudge2          Judge      `json:"defence_judge_2,omitempty" validate:"-"`
	DefenceJudge3ID        int        `json:"defence_judge_3_id" validate:"required"`
	DefenceJudge3          Judge      `json:"defence_judge_3,omitempty" validate:"-"`
	MaxRounds              int        `json:"max_rounds" validate:"required"`
	RoundDuration          int        `json:"round_duration" validate:"required"`
	DefencePointsForAction int        `json:"defence_points_for_action" validate:"required"`
	AttackPointsForAction  int        `json:"attack_points_for_action" validate:"required"`
	Status                 int        `json:"status"` // pending: 0, active: 1, finished: 2
	StartedAt              *time.Time `json:"started_at,omitempty"`
	CreatedAt              *time.Time `json:"created_at"`
	UpdatedAt              *time.Time `json:"updated_at"`
	RoundsCount            int        `json:"rounds_count"`
	Rounds                 []Round    `json:"rounds,omitempty"`
}

type Round struct {
	ID         int          `json:"id"`
	FightID    int          `json:"fight_id"`
	Number     int          `json:"number"`
	Status     int          `json:"status"` // pending: 0, active: 1, paused: 2, finished: 3
	StartedAt  int          `json:"started_at"`
	FinishedAt int          `json:"finished_at"`
	CreatedAt  time.Time    `json:"created_at"`
	UpdatedAt  time.Time    `json:"updated_at"`
}
