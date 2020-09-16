package main

import (
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/go-playground/locales/ru"
	ut "github.com/go-playground/universal-translator"

	 "github.com/go-playground/validator"
	//"github.com/go-playground/validator/v10"
	//ru_translations "github.com/go-playground/validator/v10/translations/ru"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
	"github.com/spf13/viper"
)

type App struct {
	Router *mux.Router
	Logger http.Handler
	DB     *sql.DB
}

var (
	uni      *ut.UniversalTranslator
	validate *validator.Validate
)

func (a *App) InitializeRoutes() {
	a.Router.HandleFunc("/api/fighters", a.getFighters).Methods("GET")
	a.Router.HandleFunc("/api/fighters", a.createFighter).Methods("POST")
	a.Router.HandleFunc("/api/fighters/{id:[0-9]+}", a.getFighter).Methods("GET")
	a.Router.HandleFunc("/api/fighters/{id:[0-9]+}", a.updateFighter).Methods("PUT")
	a.Router.HandleFunc("/api/fighters/{id:[0-9]+}", a.deleteFighter).Methods("DELETE")

	a.Router.HandleFunc("/api/judges", a.getJudges).Methods("GET")
	a.Router.HandleFunc("/api/judges", a.createJudge).Methods("POST")
	a.Router.HandleFunc("/api/judges/{id:[0-9]+}", a.getJudge).Methods("GET")
	a.Router.HandleFunc("/api/judges/{id:[0-9]+}", a.updateJudge).Methods("PUT")
	a.Router.HandleFunc("/api/judges/{id:[0-9]+}", a.deleteJudge).Methods("DELETE")

	a.Router.HandleFunc("/api/fights", a.getFights).Methods("GET")
	a.Router.HandleFunc("/api/fights", a.createFight).Methods("POST")
	a.Router.HandleFunc("/api/fights/current", a.getCurrentFight).Methods("GET")
	a.Router.HandleFunc("/api/fights/{id:[0-9]+}", a.getFight).Methods("GET")
	a.Router.HandleFunc("/api/fights/{id:[0-9]+}", a.updateFight).Methods("PUT")
	a.Router.HandleFunc("/api/fights/{id:[0-9]+}", a.deleteFight).Methods("DELETE")
	a.Router.HandleFunc("/api/fights/{id:[0-9]+}/start", a.startFight).Methods("PUT")
	a.Router.HandleFunc("/api/fights/{id:[0-9]+}/finish", a.finishFight).Methods("PUT")

	a.Router.HandleFunc("/api/rounds", a.getRounds).Methods("GET")
	a.Router.HandleFunc("/api/rounds", a.createRound).Methods("POST")
	a.Router.HandleFunc("/api/rounds/{id:[0-9]+}", a.getRound).Methods("GET")
	a.Router.HandleFunc("/api/rounds/{id:[0-9]+}", a.updateRound).Methods("PUT")
	a.Router.HandleFunc("/api/rounds/{id:[0-9]+}", a.deleteRound).Methods("DELETE")
	a.Router.HandleFunc("/api/rounds/{id:[0-9]+}/start", a.startRound).Methods("PUT")
	a.Router.HandleFunc("/api/rounds/{id:[0-9]+}/pause", a.pauseRound).Methods("PUT")
	a.Router.HandleFunc("/api/rounds/{id:[0-9]+}/stop", a.stopRound).Methods("PUT")
}

func validateInputs(dataSet interface{}) (bool, []string) {

	ru := ru.New()
	uni = ut.New(ru, ru)
	trans, _ := uni.GetTranslator("ru")
	validate := validator.New()
	//ru_translations.RegisterDefaultTranslations(validate, trans)
	err := validate.Struct(dataSet)

	if err != nil {

		if err, ok := err.(*validator.InvalidValidationError); ok {
			panic(err)
		}

		var errors []string
		errs := err.(validator.ValidationErrors)
		for _, err := range errs {
			errors = append(errors, err.Translate(trans))
		}

		return false, errors
	}
	return true, nil
}

func (a *App) Initialize() {
	a.DB, err = connectToPostgresDB()
	if err != nil {
		fmt.Println(err)
		return
	}

	a.Router = mux.NewRouter()
	a.Logger = handlers.CombinedLoggingHandler(os.Stdout, a.Router)
	a.InitializeRoutes()
}

func (a *App) Run() {
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	originsOk := handlers.AllowedOrigins([]string{"http://localhost:8080", "http://localhost:8081", "http://localhost:3000" , "http://95.217.152.98:80 " , "http://95.217.152.98"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "PATCH", "OPTIONS", "DELETE"})
	credentialsOk := handlers.AllowCredentials()

	log.Fatal(http.ListenAndServe(":"+viper.GetString("server.port"),
		handlers.CORS(headersOk, originsOk, methodsOk, credentialsOk)(a.Logger)))
}
