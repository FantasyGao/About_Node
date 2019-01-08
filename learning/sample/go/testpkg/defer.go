package main

import (
	"fmt"
	"os"
)

func main() {
	defer fmt.Printf("defer")

	os.Exit(3)
}