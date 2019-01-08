package main

import "fmt"

type User struct {
	name string
	age int
}

func (u User)Tostring() {
	println(u.name)
}

type Company struct {
	User
	model int
}

type X int

func (x *X) inc() {
	fmt.Printf("x type\n")
	*x++
}

func main()  {
	var c Company
	var x X

	x.inc()
	println(x)

	c.name = "tingrong"
	c.age = 8
	c.model = 122
	c.Tostring()

	fmt.Println(c)
}