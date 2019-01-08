package main

import (
	"time"
	"fmt"
)

func down(flag chan bool) {
	fmt.Printf("start。。。")
	fmt.Println(time.Second)
	time.Sleep(time.Second)
	fmt.Printf("finish。。。")
	flag <- true
}

func left(ping chan string, msg string) {
	ping <- msg
}

func flow(ping chan string, pong chan string) {
	msg:=<-ping
	pong<-msg
}

func 

func main() {
	fmt.Printf("start")
	ch := make(chan string)
	cht := make(chan string, 5)
	go func(){
		fmt.Printf("1")
		ch <-"message"
	}()
	// msg:= <- ch
	// fmt.Printf("2")
	// fmt.Println(msg)
	go func (){
		ch <-"message000"
	}()
	msg1:= <- ch
	fmt.Printf("3")
	fmt.Println(msg1)
	cht <- "my"
	cht <- "name"
	cht <- "is"
	cht <- "tingrong"
	fmt.Println(<-cht,<-cht,<-cht,<-cht)
	flag:=make(chan bool, 1)
	 go down(flag)
	//<- flag
	//fmt.Println( <- flag)
	fmt.Println("sssssssssss-")

	pi:=make(chan string, 1)
	pr:=make(chan string, 1)
	left(pi, "i am big")
	flow(pi, pr)
	println(<-pr)
}