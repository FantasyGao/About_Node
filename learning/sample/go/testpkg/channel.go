package main

func Cusm(data chan int, done chan bool){
	for x := range data {
		println("reve:", x)
	}

	done <- true
}

func Prod(data chan int) {
	for i:=0;i<10;i++{
		data <- i
	}

	close(data)
}

func main() {
	done:= make(chan bool)
	data:=make(chan int)

	go Cusm(data, done)
	go Prod(data)

	<-done
}