package main

import (
	"strconv"
	"fmt"
)

func main(){
	i, err:=strconv.Atoi("99")
	if err != nil {
		panic(err)
	}
	j:=strconv.Itoa(99)
	fmt.Println(i)
	fmt.Println(j+"3")
}