package main

import "fmt"
import "time"

func task(id int)  {
	for i:=0;i<10;i++ {
		fmt.Printf("%d: %d\n", id, i)
		// fmt.Println(time.Second)

		time.Sleep(time.Second)
	}
}

func asyncF() {
	for i:=0;i<5;i++ {
		fmt.Println("async i:", i)
	}
}
func asyncF1() {
	for i:=0;i<5;i++ {
		fmt.Println("=======:")
	}
 }

 func f(from string) {
    for i := 0; i < 3; i++ {
        fmt.Println(from, ":", i)
    }
}

func main() {
	// go task(1)
	// go task(2)

	// time.Sleep(time.Second*1)
	// f("direct")
	// go f("goroutine")
	// go func(msg string) {
    //     fmt.Println(msg)
	// }("going")
	go asyncF()
	go asyncF1()
	var input string
    fmt.Scanln(&input)
    fmt.Println("done")
}
