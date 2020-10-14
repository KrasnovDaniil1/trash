package main

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"
	"github.com/gorilla/mux"
)

// curl --user user1:pass1 127.0.0.1:8000/api/fighters/list
func (a *App) getFighters(w http.ResponseWriter, r *http.Request) {
	rows, err := a.DB.Query("SELECT * FROM fighters")
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
	}
	defer rows.Close()

	var fighters = make([]Fighter, 0)
	for rows.Next() {
		var p Fighter
		err := rows.Scan(&p.ID, &p.FirstName, &p.LastName)
		if err != nil {
			respondWithError(w, http.StatusInternalServerError, err.Error())
		}

		fighters = append(fighters, p)
	}

	_ = json.NewEncoder(w).Encode(fighters)
}

// curl --header "Content-Type: application/json" --request POST --data '{"first_name": "ABC", "last_name": "ACME"}' \
// 		--user user1:pass1 127.0.0.1:8000/api/fighters/new
func (a *App) createFighter(w http.ResponseWriter, r *http.Request) {

	var p Fighter
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

	_, err := a.DB.Query("INSERT INTO fighters (first_name, last_name) VALUES ($1, $2)", p.FirstName, p.LastName)
	if err != nil {
		log.Println(err)
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithMessage(w, http.StatusCreated, "New row added.")
}

// curl --user user1:pass1 127.0.0.1:8000/api/fighters/10
func (a *App) getFighter(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid fighter ID")
		return
	}

	p := Fighter{ID: id}
	row := a.DB.QueryRow("SELECT first_name, last_name FROM fighters WHERE id=$1", p.ID)
	if err := row.Scan(&p.FirstName, &p.LastName); err != nil {
		respondWithError(w, http.StatusBadRequest, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

// curl --request PUT --data '{"first_name": "ABC", "last_name": "ACME"}' --user user1:pass1 127.0.0.1:8000/api/fighters/11
func (a *App) updateFighter(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid fighter ID")
		return
	}

	var p Fighter
	decoder := json.NewDecoder(r.Body)
	if err := decoder.Decode(&p); err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid payload")
		return
	}
	defer r.Body.Close()
	p.ID = id

	_, err = a.DB.Query("UPDATE fighters SET first_name=$1, last_name=$2 WHERE id=$3", p.FirstName, p.LastName, p.ID)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithJSON(w, http.StatusOK, p)
}

// curl --request DELETE --user user1:pass1 127.0.0.1:8000/api/fighters/10
func (a *App) deleteFighter(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id, err := strconv.Atoi(vars["id"])
	if err != nil {
		respondWithError(w, http.StatusBadRequest, "Invalid fighter ID")
		return
	}

	_, err = a.DB.Query("DELETE FROM fighters WHERE id=$1", id)
	if err != nil {
		respondWithError(w, http.StatusInternalServerError, err.Error())
		return
	}

	respondWithMessage(w, http.StatusOK, "Deleted.")
}
