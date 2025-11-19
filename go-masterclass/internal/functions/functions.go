package functions

import "fmt"

func Execute() {
	fmt.Println("Executing functions package")

	sum1 := sum(5, 7)
	sum2 := sum(10, 15)

	result := sum(sum1, sum2)
	fmt.Println("Sum Result:", result)

	result2, err := divide(10, 2)
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Division Result:", result2)
	}
}

func sum(a int, b int) int {
	return a + b
}

func divide(a int, b int) (int, error) {
	if b == 0 {
		return 0, fmt.Errorf("division by zero is not allowed")
	}
	return a / b, nil
}
