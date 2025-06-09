package main

import (
	"log"
	"net/http"
	"simple-crud-api/config"
	"simple-crud-api/handlers"
	"simple-crud-api/models"

	"github.com/gorilla/mux"
)

func main() {
	dbConnection := config.SetupDB()
	defer dbConnection.Close()

	_, err := dbConnection.Exec(models.CreateTableSQL)
	if err != nil {
		log.Fatal(err)
	}

	router := mux.NewRouter()

	taskHandler := handlers.NewTaskHandler(dbConnection)

	router.HandleFunc("/tasks", taskHandler.ReadTasks).Methods("GET")
	router.HandleFunc("/tasks", taskHandler.CreateTask).Methods("POST")
	// router.HandleFunc("/tasks/{id}", taskHandler.UpdateTask).Methods("PUT")
	// router.HandleFunc("/tasks/{id}", taskHandler.DeleteTask).Methods("DELETE")

	log.Fatal(http.ListenAndServe(":8080", router))
}
