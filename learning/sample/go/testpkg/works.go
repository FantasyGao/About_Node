package main

import (
	"time"
	"fmt"
)

func worker(i int, ch1 <-chan int, ch2 chan<- int) {
	for j:= range ch1 {
		fmt.Println( i,"chan1->chan2", j)
		time.Sleep(time.Second*2)
		ch2 <- j*2
	}
}

func main() {
	var ch1 = make(chan int, 100)
	var ch2 = make(chan int, 100)
	for i:=0;i<3;i++{
		go worker(i, ch1, ch2)
	}
	for j:=0;j<9;j++{
		ch1 <- j
	}
	close(ch1)
	for k:=0;k<9;k++{
		<-ch2
	}
	fmt.Printf("start--->")
}