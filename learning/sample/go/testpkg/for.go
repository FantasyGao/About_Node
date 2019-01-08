package main

import "fmt"

func leArr()([5]int){
	var x [5]int
	fmt.Println(x)
	x[3] = 3
	b:=[5]int{1, 8, 2}
	fmt.Println(b)
	return b
}

func makeAr()([3]int){
	var i = [3]int{3, 5, 7}
	j:=make([]string, 3)
	fmt.Println(len(j))
	j[0]="a"
	j[1]="a"
	j = append(j, "tirn")
	fmt.Println(j)
	fmt.Println(len(j))
	return i
}

func makeMap()(map[string]string){
	var m = map[string]string{"a": "kk", "b": "ll"}
	return m
}

func main() {
	fmt.Print("for test");
	var i int = 0;
	println("start")
	for i< 9{
		fmt.Printf("for test %d\n", i);
		i++;
		if i>10 {
			break
		};
	}
	res := leArr()
	fmt.Println(res)
	makeAr()
	mp:=makeMap()
	for k, v :=range mp{
		fmt.Printf("%s -> %s\n", k, v)
	}
	fmt.Println(mp)
}