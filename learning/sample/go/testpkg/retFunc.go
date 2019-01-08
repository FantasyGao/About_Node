package main

import (
	"errors"
	"fmt"
)

func test(x int) func() {
	return func() {
		fmt.Println(x)
	}
}

func main() {
	err := errors.New("new error")
	fmt.Println(err)
	f := test(2)
	defer fmt.Printf("test runing\n")
	fmt.Printf("test runing ---\n")
	f()
}