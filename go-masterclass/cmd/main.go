package main

import (
	"fmt"
	"masterclass/internal/controller"
	"masterclass/internal/functions"
)

func main() {
	fmt.Println("Hello, Go Masterclass!")
	controller.Execute()
	functions.Execute()
}
