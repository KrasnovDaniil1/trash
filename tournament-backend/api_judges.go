package main

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// curl --user user1:pass1 127.0.0.1:8000/api/judges/list
func (a *App) getJudges(w http.ResponseWriter, r *http.Request) {
	rows, err := a.DB.Query("SELECT * FROM judges")
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
	}
	defer rows.Close()

	var judges = make([]Judge, 0)
	for rows.Next() {
		var p Judge
		err := rows.Scan(&p.ID, &p.FirstName, &p.LastName)
		if err != nil {
			respondWithError(w, http.StatusInternalServerError, err.Error())
		}

		judges = append(judges, p)
	}

	_ = json.NewEncoder(w).Encode(judges)
}

// curl --header "Content-Type: application/json" --request POST --data '{"first_name": "ABC", "last_name": "ACME"}' \
// 		--user user1:pass1 127.0.0.1:8000/api/judges/new
func (a *App) createJudge(w http.ResponseWriter, r *http.Request) {
	var p Judge
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

	_, err := a.DB.Query("INSERT INTO judges (first_name, last_name) VALUES ($1, $2)", p.FirstName, p.LastName)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithMessage(w, http.StatusCreated, "New row added.")
}

// curl --user user1:pass1 127.0.0.1:8000/api/judges/10
func (a *App) getJudge(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid judge ID")
		return
	}

	p := Judge{ID: id}
	row := a.DB.QueryRow("SELECT first_name, last_name FROM judges WHERE id=$1", p.ID)
	if err := row.Scan(&p.FirstName, &p.LastName); err != nil {
		respondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

// curl --request PUT --data '{"first_name": "ABC", "last_name": "ACME"}' --user user1:pass1 127.0.0.1:8000/api/judges/11
func (a *App) updateJudge(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid judge ID")
		return
	}

	var p Judge
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&p); err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid payload")
		return
	}
	defer r.Body.Close()
	p.ID = id

	_, err = a.DB.Query("UPDATE judges SET first_name=$1, last_name=$2 WHERE id=$3", p.FirstName, p.LastName, p.ID)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

// curl --request DELETE --user user1:pass1 127.0.0.1:8000/api/judges/10
func (a *App) deleteJudge(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid judge ID")
		return
	}

	_, err = a.DB.Query("DELETE FROM judges WHERE id=$1", id)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithMessage(w, http.StatusOK, "Deleted.")
}
