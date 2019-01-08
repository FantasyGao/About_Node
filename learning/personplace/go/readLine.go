package main
import (
  "bufio"
  "fmt"
  "io"
  "os"
  "bytes"
  "unicode"
  "reflect"
)

func searchChinese (content *os.File) {
  br := bufio.NewReader(content)
  var chinese string
  var flag bool
  var tempStr string
  var buffer bytes.Buffer
  for i:=1;;i++{
      flag = false
      buffer.Reset()
      a, _, c := br.ReadLine()
      if c == io.EOF {
          break
      }
      for _, r := range string(a) {
        // 判断字符是否有汉字
        if unicode.Is(unicode.Scripts["Han"], r) {
          tempStr = fmt.Sprintf("%c", r)
          buffer.WriteString(tempStr)
          flag = true
        }
      }
      if flag {
        chinese = buffer.String()
        fmt.Printf("第 %d行为 %s\n",i,chinese)
      }
  }
}

func main () {
  content, err := os.Open("/Users/a123/Desktop/personplace/go/test.vue")
  if err != nil {
    fmt.Printf("error: %s\n", err)
    return
  }
  defer content.Close()
  fmt.Println(reflect.TypeOf(content))
  searchChinese(content)
}
