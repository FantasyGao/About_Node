package main

import (
  "fmt"
  "unicode"
  "reflect"
  "bytes"
)
func main(){
  var buffer bytes.Buffer
  var str1 string
  str1 = "sd "
  str := "gao高飞"
  for i:=0; i<len(str);i++ {
    fmt.Println(str[i])
  }
  for _, r := range "Hello高飞" {
    // 判断字符是否为汉字

    if unicode.Is(unicode.Scripts["Han"], r) {
      temp := fmt.Sprintf("%c", r) // 世界
      fmt.Println(reflect.TypeOf(temp)) // 世界
      buffer.WriteString(temp)
    }
  }
  str1 = ""
  fmt.Println(buffer.String())
  fmt.Println(str1)
}
