package main

import (
	"fmt"
	"errors"
)

func genErr(i int) (int, error) {
	if i==6 {
		return -1, errors.New("find error")
	}
	return i, nil
}

type myErr struct {
	code int
	msg string
}

func (e *myErr) Error()string {
	return fmt.Sprintf("%s->%d\n", e.msg, e.code)
}

func genErr2(i int)(int, error){
	if i==6 {
		return -1, &myErr{-1, "find error"}
	}
	return -1, nil
}

func main(){
	for x, y:= range []int{4, 6} {
		fmt.Println(x)
		fmt.Println(y)
		if i, e := genErr(y); e!=nil {
			fmt.Printf("%d : %s\n",i, e)
			fmt.Println(e)
		}
	}
	if as, ok := genErr2(6); ok!=nil {
		fmt.Println(as)
		fmt.Println(ok)
		fmt.Println(ok.(*myErr).code)
	}
}