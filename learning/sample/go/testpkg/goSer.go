package main;
    
    import (
       "fmt"
       "net/http"
       "time"
    )
    
    type customHandler struct{
    
    }
    
    func(cb *customHandler) ServeHTTP( w http.ResponseWriter, r *http.Request ) {
        for i:=100;i>0;i-- {
            fmt.Println("第%d次", i)
        }
        println("customHandler!!!!");
        w.Write([]byte("customHandler!!"));
    }
    
    func main() {
        var server *http.Server = &http.Server{
            Addr:           ":8080",
            Handler:        &customHandler{},
            ReadTimeout:    10 * time.Second,
            WriteTimeout:   10 * time.Second,
            MaxHeaderBytes: 1 <<20,
        }
        server.ListenAndServe();
        select {}
    }