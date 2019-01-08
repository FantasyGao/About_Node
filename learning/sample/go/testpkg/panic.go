package main

import (
	"os"
)

func main(){
	panic("a problem")
	_,er:=os.Create("~/go/src/test/go/tmp.test")

	if er!=nil {
		panic(err)
	}
}