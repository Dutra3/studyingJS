package types

import "fmt"

func Execute() {
	fmt.Println("Executing types package")

	var defaultValue int64
	fmt.Println("Default Value:", defaultValue)

	var i1 = 10000
	fmt.Println("i1:", i1)

	var i2 int32 = 10000
	fmt.Println("i2:", i2)

	var f1 float32 = 100.50
	fmt.Println("f1:", f1)

	var b1 bool = true
	fmt.Println("b1:", b1)

	var s1 string = "Go Masterclass"
	fmt.Println("s1:", s1)
}
