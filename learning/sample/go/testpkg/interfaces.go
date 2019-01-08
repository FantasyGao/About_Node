package main

import "fmt"

type itFa interface {
	sum() int
	rpp() int
}

type A struct {
	x,y int
}
type B struct {
	x int
}

func (a A) sum() int {
	return a.x + a.y
}
func (a A) rpp() int {
	return a.x * a.y
}

func (b B) sum() int {
	return b.x * 4
}
func (b B) rpp() int {
	return b.x * b.x
}

func res(it itFa) {
	fmt.Println(it.sum())
	fmt.Println(it.rpp())
}

func main() {
	m:=A{3,5}
	n:=B{6}
	res(m)
	res(n)
}