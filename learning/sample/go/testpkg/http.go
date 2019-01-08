package main

import (
	"net/http"
	"fmt"
)

func hd(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r)
	fmt.Fprintf(w, "Hello there!\n")
}

func tr(w http.ResponseWriter, req *http.Request) {
	 w.Write([]byte("Hello tingrong"))
}

func main() {
	http.HandleFunc("/", hd)
	http.Handle("/tr",http.HandlerFunc(tr))
	http.ListenAndServe(":8080", nil)
	select{};//阻塞进程
}
