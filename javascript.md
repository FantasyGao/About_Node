### javascript 细节
```
> a=1;b=(a++)+a;console.log(b);   //3
```
#### a++表达式在运算的时候是未经运算的，而后面的a是经过运算的，所以结果是b=1+2=3;

```
> a = 1+{};  console.log(a);   //"1[object Object]"
#### 在经过+链接之后，{}被转化为"[object Object]"，然后进行与1连接。
```
```
> true+true //2
#### true被转化为1，1+1=2.
```
```
> 2+null  //2
#### 经过+null转化为0 2+0=2.
```
```
> 2+undefined   //NAN
#### 经过+undefined转化为NAN 2+NAN=NAN
```
```
> 6>>1 //3
#### 十进制的7转化为2进制110,右移动1位为011（高位补0），结果转10进制为3.
```
```
> var o={x:1};console.log(o&&o.x)   //1
#### {x;1}&&1结果为真，最后返回&&后面的内容  o.x=1 
```
```
> if(x==y) stop(); 与 (x==y)&&stop(); 是否相同。  
#### 相同 ，&&与运算符会先判断左边的内容根据其结果决定是否执行右边的内容。
```
```
> var a=[1,3]; var i = 0;a[i++]*=2; //a[0]=2;a[1]=3;
#### a[i++]取到的还是a[i]并非a[i++];所以结果只改变a[0]*=2;a[0]=1*2=2
> var a=[1,3]; var i = 0;a[i++]=a[i++]*2;   //a[0]=6;a[1]=3;
#### 在经过a[i++]时i已经加1，等号右边成a[1]*2,结果3*2=6；如果最后打印i，已经是2