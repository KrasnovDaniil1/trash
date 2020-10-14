package main
import (
	"encoding/json"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/mux"
)

func (a *App) getRounds(w http.ResponseWriter, r *http.Request) {
	rows, err := a.DB.Query("SELECT * FROM rounds")
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
	}
	defer rows.Close()

	var rounds []Round
	for rows.Next() {
		var p Round
		err := rows.Scan(&p.ID, &p.FightID, &p.Number, &p.Status, &p.StartedAt, &p.FinishedAt, &p.CreatedAt, &p.UpdatedAt)
		if err != nil {
			respondWithError(w, http.StatusInternalServerError, err.Error())
		}

		rounds = append(rounds, p)
	}

	_ = json.NewEncoder(w).Encode(rounds)
}

func (a *App) createRound(w http.ResponseWriter, r *http.Request) {

	var p Round
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&p); err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid payload")
		return
	}
	defer r.Body.Close()

	if ok, errors := validateInputs(p); !ok {
		ValidationResponse(errors, w)
		return
	}

	ts := time.Now()
	query := `INSERT INTO rounds 
							(fight_id, number, status, started_at, finished_at, created_at, updated_at) 
						VALUES ($1, $2, $3, $4, $5, $6, $7)`
	_, err := a.DB.Query(query, p.FightID, p.Number, 0, nil, nil, &ts, &ts)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithMessage(w, http.StatusCreated, "New row added.")
}

func (a *App) getRound(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid round ID")
		return
	}

	p := Round{ID: id}
	row := a.DB.QueryRow("SELECT fight_id, number FROM rounds WHERE id=?", p.ID)
	if err := row.Scan(&p.FightID, &p.Number); err != nil {
		respondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

func (a *App) updateRound(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid round ID")
		return
	}

	var p Round
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&p); err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid payload")
		return
	}
	defer r.Body.Close()
	p.ID = id

	_, err = a.DB.Query("UPDATE rounds SET fight_id=?, number=? WHERE id=?", p.FightID, p.Number, p.ID)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

func (a *App) deleteRound(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid round ID")
		return
	}

	_, err = a.DB.Query("DELETE FROM rounds WHERE id=?", id)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithMessage(w, http.StatusOK, "Deleted.")
}

func (a *App) startRound(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid round ID")
		return
	}

	query := `
		UPDATE rounds SET status=1 WHERE id=$1
	`
	_, err = a.DB.Query(query, id)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, "Started")
}

func (a *App) pauseRound(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid round ID")
		return
	}

	query := `
		UPDATE rounds SET status=2 WHERE id=$1
	`
	_, err = a.DB.Query(query, id)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, "Paused")
}

func (a *App) stopRound(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid round ID")
		return
	}

	query := `
		UPDATE rounds SET status=3 WHERE id=$1
	`
	_, err = a.DB.Query(query, id)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, "Stopped")
}
