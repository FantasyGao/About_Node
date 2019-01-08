package main

import (
	"time"
	"fmt"
)

func main() {
	timer1:=time.NewTimer(time.Second*2)

	<-timer1.C
	fmt.Printf("timer start\n")

	fmt.Printf("timer start2\n")

	timer2:=time.NewTimer(time.Second)
	go func(){
		<-timer2.C
		fmt.Printf("timer start2\n")
	}()
	stop:=timer2.Stop()
	for i:=0;i<5;i++ {
		fmt.Println(i)
	}
	if stop {
		fmt.Printf("timer end\n")
	}
	timer := time.Now()
	fmt.Println("nuix:", timer.Unix())
	fmt.Println("nuixN:", timer.UnixNano())
}