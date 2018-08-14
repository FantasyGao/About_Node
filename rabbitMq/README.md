## node.js消息服务

### 安装rabbit docker镜像

``` bash
1. docker pull rabbit:management
2. sudo chmod +x rundocker (启动5673:5672 15673:15672端口)
注： 使用management 有web管理页面（本例中启动http://127.0.0.1:15673，账户与密码均为:guest）
```

### 文件解释
init.js 初始化安装rabbitMQ服务器，包括连接服务器，创建通道，定义交换器，绑定队列

index.js 消费者绑定监听

publish.js 消费者生成消息

#### ① node index.js
#### ② node publish.js

