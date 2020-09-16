package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
)

func (a *App) getFights(w http.ResponseWriter, r *http.Request) {
	query := `
	SELECT 
		f.*, 
		rf.*,
		bf.*
	FROM fights as f
	JOIN fighters AS rf ON f.red_fighter_id = rf.id
	JOIN fighters AS bf ON f.blue_fighter_id = bf.id
`
	rows, err := a.DB.Query(query)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
	}
	defer rows.Close()

	var fights = make([]Fight, 0)
	for rows.Next() {
		var p Fight
		err := rows.Scan(
			&p.ID,
			&p.RedFighterID,
			&p.BlueFighterID,
			&p.AttackJudge1ID,
			&p.AttackJudge2ID,
			&p.AttackJudge3ID,
			&p.DefenceJudge1ID,
			&p.DefenceJudge2ID,
			&p.DefenceJudge3ID,
			&p.MaxRounds,
			&p.RoundDuration,
			&p.DefencePointsForAction,
			&p.AttackPointsForAction,
			&p.Status,
			&p.StartedAt,
			&p.CreatedAt,
			&p.UpdatedAt,
			&p.RedFighter.ID,
			&p.RedFighter.FirstName,
			&p.RedFighter.LastName,
			&p.BlueFighter.ID,
			&p.BlueFighter.FirstName,
			&p.BlueFighter.LastName,
		)
		if err != nil {
			respondWithError(w, http.StatusInternalServerError, err.Error())
		}

		fights = append(fights, p)
	}

	respondWithJSON(w, http.StatusOK, fights)
}

func (a *App) createFight(w http.ResponseWriter, r *http.Request) {
	var p Fight
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&p); err != nil {
		respondWithError(w, http.StatusBadRequest, err.Error())
		return
	}
	defer r.Body.Close()

	if ok, errors := validateInputs(p); !ok {
		ValidationResponse(errors, w)
		return
	}

	ts := time.Now()
	query := `
		INSERT INTO 
			fights (
				red_fighter_id, 
				blue_fighter_id, 
				attack_judge_1_id, 
				attack_judge_2_id, 
				attack_judge_3_id, 
				defence_judge_1_id, 
				defence_judge_2_id, 
				defence_judge_3_id, 
				max_rounds, 
				round_duration, 
				defence_points_for_action, 
				attack_points_for_action, 
				created_at, 
				updated_at
			) 
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`

	_, err := a.DB.Query(query,
		p.RedFighterID,
		p.BlueFighterID,
		p.AttackJudge1ID,
		p.AttackJudge2ID,
		p.AttackJudge3ID,
		p.DefenceJudge1ID,
		p.DefenceJudge2ID,
		p.DefenceJudge3ID,
		p.MaxRounds,
		p.RoundDuration,
		p.DefencePointsForAction,
		p.AttackPointsForAction,
		&ts,
		&ts,
	)

	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithMessage(w, http.StatusCreated, "New row added.")
}

func (a *App) getCurrentFight(w http.ResponseWriter, r *http.Request) {

	p := Fight{}
	query := `
		SELECT 
			f.id, 
			f.red_fighter_id, 
			rf.*,
			f.blue_fighter_id, 
			bf.*,
			f.attack_judge_1_id, 
			aj1.*,
			f.attack_judge_2_id, 
			aj2.*,
			f.attack_judge_3_id, 
			aj3.*,
			f.defence_judge_1_id, 
			dj1.*,
			f.defence_judge_2_id, 
			dj2.*,
			f.defence_judge_3_id, 
			dj3.*,
			f.max_rounds, 
			f.round_duration, 
			f.defence_points_for_action, 
			f.attack_points_for_action, 
			f.status, 
			f.started_at, 
			f.created_at, 
			f.updated_at,
			(SELECT COUNT(*) FROM rounds where rounds.fight_id = f.id) AS rounds_count
		FROM 
			fights f
		JOIN fighters rf ON f.red_fighter_id = rf.id
		JOIN fighters bf ON f.blue_fighter_id = bf.id
		JOIN judges aj1 ON f.attack_judge_1_id = aj1.id
		JOIN judges aj2 ON f.attack_judge_2_id = aj2.id
		JOIN judges aj3 ON f.attack_judge_3_id = aj3.id
		JOIN judges dj1 ON f.defence_judge_1_id = dj1.id
		JOIN judges dj2 ON f.defence_judge_1_id = dj2.id
		JOIN judges dj3 ON f.defence_judge_1_id = dj3.id
		WHERE f.status = 1
	`

	row := a.DB.QueryRow(query)
	if err := row.Scan(
		&p.ID,
		&p.RedFighterID,
		&p.RedFighter.ID,
		&p.RedFighter.FirstName,
		&p.RedFighter.LastName,
		&p.BlueFighterID,
		&p.BlueFighter.ID,
		&p.BlueFighter.FirstName,
		&p.BlueFighter.LastName,
		&p.AttackJudge1ID,
		&p.AttackJudge1.ID,
		&p.AttackJudge1.FirstName,
		&p.AttackJudge1.LastName,
		&p.AttackJudge2ID,
		&p.AttackJudge2.ID,
		&p.AttackJudge2.FirstName,
		&p.AttackJudge2.LastName,
		&p.AttackJudge3ID,
		&p.AttackJudge3.ID,
		&p.AttackJudge3.FirstName,
		&p.AttackJudge3.LastName,
		&p.DefenceJudge1ID,
		&p.DefenceJudge1.ID,
		&p.DefenceJudge1.FirstName,
		&p.DefenceJudge1.LastName,
		&p.DefenceJudge2ID,
		&p.DefenceJudge2.ID,
		&p.DefenceJudge2.FirstName,
		&p.DefenceJudge2.LastName,
		&p.DefenceJudge3ID,
		&p.DefenceJudge3.ID,
		&p.DefenceJudge3.FirstName,
		&p.DefenceJudge3.LastName,
		&p.MaxRounds,
		&p.RoundDuration,
		&p.DefencePointsForAction,
		&p.AttackPointsForAction,
		&p.Status,
		&p.StartedAt,
		&p.CreatedAt,
		&p.UpdatedAt,
		&p.RoundsCount,
	); err != nil {
		respondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

func (a *App) getFight(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid fight ID")
		return
	}

	p := Fight{ID: id}
	query := `
		SELECT 
			f.red_fighter_id, 
			rf.*,
			f.blue_fighter_id, 
			bf.*,
			f.attack_judge_1_id, 
			aj1.*,
			f.attack_judge_2_id, 
			aj2.*,
			f.attack_judge_3_id, 
			aj3.*,
			f.defence_judge_1_id, 
			dj1.*,
			f.defence_judge_2_id, 
			dj2.*,
			f.defence_judge_3_id, 
			dj3.*,
			f.max_rounds, 
			f.round_duration, 
			f.defence_points_for_action, 
			f.attack_points_for_action, 
			f.status, 
			f.started_at, 
			f.created_at, 
			f.updated_at
		FROM 
			fights f
		JOIN fighters rf ON f.red_fighter_id = rf.id
		JOIN fighters bf ON f.blue_fighter_id = bf.id
		JOIN judges aj1 ON f.attack_judge_1_id = aj1.id
		JOIN judges aj2 ON f.attack_judge_2_id = aj2.id
		JOIN judges aj3 ON f.attack_judge_3_id = aj3.id
		JOIN judges dj1 ON f.defence_judge_1_id = dj1.id
		JOIN judges dj2 ON f.defence_judge_1_id = dj2.id
		JOIN judges dj3 ON f.defence_judge_1_id = dj3.id
		WHERE f.id=$1
	`

	row := a.DB.QueryRow(query, p.ID)
	if err := row.Scan(
		&p.RedFighterID,
		&p.RedFighter.ID,
		&p.RedFighter.FirstName,
		&p.RedFighter.LastName,
		&p.BlueFighterID,
		&p.BlueFighter.ID,
		&p.BlueFighter.FirstName,
		&p.BlueFighter.LastName,
		&p.AttackJudge1ID,
		&p.AttackJudge1.ID,
		&p.AttackJudge1.FirstName,
		&p.AttackJudge1.LastName,
		&p.AttackJudge2ID,
		&p.AttackJudge2.ID,
		&p.AttackJudge2.FirstName,
		&p.AttackJudge2.LastName,
		&p.AttackJudge3ID,
		&p.AttackJudge3.ID,
		&p.AttackJudge3.FirstName,
		&p.AttackJudge3.LastName,
		&p.DefenceJudge1ID,
		&p.DefenceJudge1.ID,
		&p.DefenceJudge1.FirstName,
		&p.DefenceJudge1.LastName,
		&p.DefenceJudge2ID,
		&p.DefenceJudge2.ID,
		&p.DefenceJudge2.FirstName,
		&p.DefenceJudge2.LastName,
		&p.DefenceJudge3ID,
		&p.DefenceJudge3.ID,
		&p.DefenceJudge3.FirstName,
		&p.DefenceJudge3.LastName,
		&p.MaxRounds,
		&p.RoundDuration,
		&p.DefencePointsForAction,
		&p.AttackPointsForAction,
		&p.Status,
		&p.StartedAt,
		&p.CreatedAt,
		&p.UpdatedAt,
	); err != nil {
		respondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

func (a *App) updateFight(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid fight ID")
		return
	}

	var p Fight
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&p); err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid payload")
		return
	}
	defer r.Body.Close()
	p.ID = id

	query := `
		UPDATE fights 
		SET 
			red_fighter_id=$1, 
			blue_fighter_id=$2, 
			attack_judge_1_id=$3, 
			attack_judge_2_id=$4, 
			attack_judge_3_id=$5, 
			defence_judge_1_id=$6, 
			defence_judge_2_id=$7, 
			defence_judge_3_id=$8, 
			max_rounds=$9, 
			round_duration=$10, 
			defence_points_for_action=$11, 
			attack_points_for_action=$12, 
			created_at=$13, 
			updated_at=$14

		WHERE id=$15
	`
	_, err = a.DB.Query(query,
		p.RedFighterID,
		p.BlueFighterID,
		p.AttackJudge1ID,
		p.AttackJudge2ID,
		p.AttackJudge3ID,
		p.DefenceJudge1ID,
		p.DefenceJudge2ID,
		p.DefenceJudge3ID,
		p.MaxRounds,
		p.RoundDuration,
		p.DefencePointsForAction,
		p.AttackPointsForAction,
		p.CreatedAt,
		p.UpdatedAt,
		p.ID,
	)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

func (a *App) deleteFight(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid fight ID")
		return
	}

	_, err = a.DB.Query("DELETE FROM fights WHERE id=$1", id)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithMessage(w, http.StatusOK, "Deleted.")
}

func (a *App) startFight(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid fight ID")
		return
	}

	var p Fight
	p.ID = id

	query := `
		UPDATE fights 
		SET 
			status=1
		WHERE id=$1
	`
	_, err = a.DB.Query(query,
		p.ID,
	)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

func (a *App) finishFight(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid fight ID")
		return
	}

	var p Fight
	p.ID = id

	query := `
		UPDATE fights 
		SET 
			status=2
		WHERE id=$1
	`
	_, err = a.DB.Query(query,
		p.ID,
	)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}
