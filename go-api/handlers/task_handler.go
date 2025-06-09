package handlers

import (
	"database/sql"
	"encoding/json"
	"net/http"
	"simple-crud-api/models"
)

type TaskHandler struct {
	DB *sql.DB
}

func NewTaskHandler(db *sql.DB) *TaskHandler {
	return &TaskHandler{DB: db}
}

func (taskHandler *TaskHandler) ReadTasks(w http.ResponseWriter, r *http.Request) {
	rows, err := taskHandler.DB.Query("SELECT * FROM tasks")
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var tasks []models.Task

	for rows.Next() {
		var task models.Task
		err := rows.Scan(&task.ID, &task.Title, &task.Description, &task.Status)

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		tasks = append(tasks, task)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(tasks)
}

func (taskHandler *TaskHandler) CreateTask(w http.ResponseWriter, r *http.Request) {
	var task models.Task
	err := json.NewDecoder(r.Body).Decode(&task)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	query := "INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING id"
	err = taskHandler.DB.QueryRow(query, task.Title, task.Description, task.Status).Scan(&task.ID)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(task)
}
