package main

import "fmt"

func cl()(func()(int)){
	var i int =0
	return func()(int){
		i++
		return i
	}
}
func us1() {
	fmt.Printf("f enter\n")
	f := cl()
	fmt.Println(f())
	fmt.Println(f())
	fmt.Println(f())

	g:=cl()
	fmt.Printf("g enter\n")
	fmt.Println(g())
}

func digui(n int)(int) {
	if n==0 {
		return 1
	}
	return n*digui(n-1)
}

func us2(){
	i:=digui(7)
	fmt.Println(i)
}

func zhizhen(p * string) {
	fmt.Println(p)
	fmt.Println(*p)
}
func us3() {
	s := "tinrg"
	zhizhen(&s)
}

func st(){
	type Me struct {
		name string
		age int
	}
	s := Me{"tingrong", 24}
	sp := &s
	fmt.Println(s.name)
	fmt.Println(sp.name)
	fmt.Println(sp)
}

type St struct {
	x,y int
}

func (r *St) sum() int {
	return r.x * r.y
}
func (r St) sum2() int {
	return r.x * r.y
}
func theSt(){
	k:=St{4, 6}
	m:=k.sum()
	n:=k.sum2()
	fmt.Println(m)
	fmt.Println(n)
}



func main(){
	us1()
	us2()
	us3()
	st()
	theSt()
}