package main

import (
	"log"
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"net/http"
	"github.com/gorilla/mux"
	"encoding/json"
)

type Response struct {
	Status string `json:"status"`
}

func getData(w http.ResponseWriter, r *http.Request) {
	connStr := "user=postgres password=qwer2003 dbname=testdb sslmode=disable"
    db, err := sql.Open("postgres", connStr)
    if err != nil {
		panic(err)
        fmt.Println("not")
    } 
    defer db.Close()
	result, err := db.Exec("insert into data(time) values (now()::timestamp);")
    if err != nil{
	 panic(err)
	 fmt.Println("not")
    }
	fmt.Println(result.RowsAffected())  // количество добавленных строк
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(Response{Status: "OK"})
}

func main() {	
	r := mux.NewRouter()
	r.HandleFunc("/ping", getData).Methods("GET")
	log.Fatal(http.ListenAndServe(":8000", r))
}