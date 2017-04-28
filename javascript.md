### javascript 细节

> a=1;b=(a++)+a;console.log(b);   //3
#### a++表达式在运算的时候是未经运算的，而后面的a是经过运算的，所以结果是b=1+2=3;

> a = 1+{};  console.log(a);   //"1[object Object]"
#### 在经过+链接之后，{}被转化为"[object Object]"，然后进行与1连接。

> true+true //2
#### true被转化为1，1+1=2.

> 2+null  //2
#### 经过+null转化为0 2+0=2.

> 2+undefined   //NAN
#### 经过+undefined转化为NAN 2+NAN=NAN
