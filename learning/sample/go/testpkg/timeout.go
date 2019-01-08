package main

import (
	"fmt"
	"time"
)

func main() {
	var ch chan string = make(chan string, 3)
	go func (){
		time.Sleep(time.Second*2)
		ch <- "message"
	}()
	select {
	  case res:= <-ch :
		fmt.Println(res)
	  case <-time.After(time.Second*1):
		fmt.Printf("time out!")
	}
	ch1:=make(chan string, 2)
	go func(){
		time.Sleep(time.Second*3)
		ch1<- "info2"
	}()
	select {
	  case n:= <-ch1:
		fmt.Println(n)
	  case <-time.After(time.Second*4):
		fmt.Printf("time out~")  	
	}
	ch2:=make(chan string, 1)
	go func(){
		ch2<-"kkkkk0"
		time.Sleep(time.Second*3)
	}()
	select {
	case ss:=<-ch2:
		fmt.Println(ss)
	case <-time.After(time.Second):
		fmt.Printf("超时了")
	}
	ch3:=make(chan string, 1)
	select {
	   case x:=<-ch3:
		fmt.Println(x)
	   default:
		fmt.Println("over")
	}
	ch4:=make(chan string, 3)
	ch4 <- "one"
	ch4 <- "two"
	close(ch4)
	for my:=range ch4{
		fmt.Println(my)
	}
	print("end")
}
