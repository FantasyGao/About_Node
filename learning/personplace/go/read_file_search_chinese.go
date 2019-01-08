
package main
 import (
    "flag"
    "fmt"
    "os"
    "path/filepath"
    "strings"
    "bytes"
    "unicode"
    "bufio"
    "io"
 )

var fileInfoList []map[string]string //获取文件列表
var suffixArg []string //获取传入的参数
var resultFile *os.File //打开的文件
// 查找符合条件的文件
func searchFile(path string, f os.FileInfo, err error) error {
 if f == nil {
     return err
 }
 if f.IsDir() {
     return nil
 }
 fileInfoMap := make(map[string]string)
 currentDir :=  path //+ "\r\n"
 fileInfoMap["absoluatePath"] = currentDir
 //用strings.HasSuffix(src, suffix)//判断src中是否包含 suffix结尾
 if len(suffixArg) > 0 {
   for _, val := range suffixArg {
     ok := strings.HasSuffix(currentDir, "." + val)
     if ok {
       fileInfoList = append(fileInfoList, fileInfoMap) //将目录push到listfile []string中
       break
     }
   }
 } else {
   fileInfoList = append(fileInfoList, fileInfoMap)
 }
 return nil
}
// 找中文，可配置“han” 差不同的内容
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
      str := string(a)
      if !strings.Contains(str, "//") {
        for _, r := range string(a) {
          // 判断字符是否有汉字
          if unicode.Is(unicode.Scripts["Han"], r) && !flag{
          //  tempStr = fmt.Sprintf("%c", r)
            tempStr = string(a)
            buffer.WriteString(tempStr)
            flag = true
          }
        }
      }
      if flag {
        chinese = buffer.String()
        fmt.Printf("第 %d行包含中文 %s\n",i,chinese)
        countStr := fmt.Sprintf("%d", i)
        str := "第"+ countStr +"行包含中文:"+ chinese + "\n"
        resultFile.WriteString(str)
      }
  }
}
// 打印结果
func resolveResult(p []map[string]string) {
  fmt.Printf("共查找到%d个文件\n", len(p))
  countStr := fmt.Sprintf("%d", len(p))
  count := "共查找到" + countStr + "个文件\n"
  resultFile.WriteString(count)
  if len(p)!=0 {
    for _, fileItem := range p {
        fmt.Println("文件位置：", fileItem["absoluatePath"])
        str := "文件位置：" + fileItem["absoluatePath"]+ "\n"
        resultFile.WriteString(str)
        content, err := os.Open(fileItem["absoluatePath"])
        if err != nil {
          fmt.Printf("打开文件出错: %s\n", err)
          return
        }
        defer content.Close()
        searchChinese(content)
    }
  }
}

func judgeSearchWay (Arg1,Arg2 string) {
  rootArg := Arg1
  pixArg := Arg2
  if rootArg != "" {
    if pixArg != "" {
      suffixArg = strings.Split(pixArg, ",")
    }
    fmt.Println("要查找的文件有：（后缀名）",suffixArg)
    err := filepath.Walk(rootArg, searchFile)
    if err != nil {
      fmt.Println("传入路径错误：", err)
    }
  } else {
    var rootPath string
    var suffix string
    fmt.Println("请输入目录：")
    fmt.Scanf("%s", &rootPath)
    fmt.Println("请输入要查找的文件类型后缀名（eg: go,html,txt）：")
    fmt.Scanf("%s", &suffix)
    suffixArg = strings.Split(suffix, ",")
    fmt.Println("要查找的文件有：（后缀名）",suffixArg)
    err := filepath.Walk(rootPath, searchFile)
    if err != nil {
      fmt.Println("填写路径错误：", err)
    }
  }
}
func main() {
    flag.Parse()
    f, err := os.OpenFile("result.txt", os.O_CREATE|os.O_WRONLY, 0777)
    if err != nil {
      fmt.Printf("创建文件发生错误！%s\n", err)
      return
    }
    resultFile = f
    defer f.Close()
    judgeSearchWay(flag.Arg(0), flag.Arg(1))
    resolveResult(fileInfoList)
}
