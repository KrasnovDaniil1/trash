package main

import (
	"database/sql"
	"fmt"

	"github.com/spf13/viper"
)

func connectToPostgresDB() (*sql.DB, error) {
	connStr := "postgres://" + viper.GetString("postgres_db.username") + ":" + viper.GetString("postgres_db.password") + "@" + viper.GetString("postgres_db.server") + ":" + viper.GetString("postgres_db.port") + "/" + viper.GetString("postgres_db.db_name") + "?sslmode=disable"
	fmt.Println(connStr)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	err = db.Ping()
	if err != nil {
		return nil, err
	}
	fmt.Println("PONG POSTGRES")
	return db, nil
}
