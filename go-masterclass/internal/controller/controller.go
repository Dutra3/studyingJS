package controller

import (
	"fmt"
	"math/rand"
)

func Execute() {
	fmt.Println("Executing controller package")

	randomNumber := rand.Intn(100)

	if randomNumber%2 == 0 {
		fmt.Println("Random number is even:", randomNumber)
	} else {
		fmt.Println("Random number is odd:", randomNumber)
	}
	if randomNumber > 50 {
		fmt.Println("Random number is greater than 50")
	}
}
