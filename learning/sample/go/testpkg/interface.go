package main

import "fmt"

type User struct{
	name string
	age int
}

func (u User)Printf() {
	fmt.Println(u.name)
}

func (u User)Printf2() {
	fmt.Println(u.age)
}

type P interface {
	Printf()
	Printf2()
}

func main() {
	var u User
	u.name = "tingrong"
	u.age = 24
	u.Printf()
	u.Printf2()

	var p P = u
	p.Printf()
	p.Printf2()
}