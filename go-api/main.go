package main

import (
	"log"
	"net/http"
	"simple-crud-api/config"
	"simple-crud-api/models"
)

func main() {
	dbConnection := config.SetupDB()
	defer dbConnection.Close()

	_, err := dbConnection.Exec(models.CreateTableSQL)
	if err != nil {
		log.Fatal(err)
	}

	log.Fatal(http.ListenAndServe(":8080", nil))
}
