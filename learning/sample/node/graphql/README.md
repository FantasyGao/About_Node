## Koa + Mysql(Docker) + Graphql 

### run project
  ``` shell
  clone 文件到本地
  yarn //完成安装
  node index.js //127.0.0.1:9991
 ```
### install mysql(5.6) in docker

``` shell
1.下载镜像： docker pull mysql:5.6
2.启动，设置root初始密码为123456 docker run -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.6
3.进入容器：docker exec -it mysql 建库建表（语句在test.sql文件）
（也可直接启动mysql工具连接本机3306进行操作）
 ```
#### 访问
URL:http://localhost:9991/graphql
Method: POST
Body: 
(带ID查询)
```
{
	"query":"query queryType {getUserById(id:2) {id, uid, sex, createdTime, description}}"
}
```
Result: 
```
  "data": {
    "getUserById": {
      "id": 2,
      "uid": "uid124",
      "sex": "女",
      "createdTime": "Mon Sep 10 2018 07:10:57 GMT+0800 (CST)",
      "description": "this is girl"
    }
  }
}
```

Body: 
(列表查询)
```
{
	"query":"query {getUsers {id, name, uid, description}}"
}
```
Result: 
```
{
  "data": {
    "getUsers": [
      {
        "id": 1,
        "name": "fantasygao",
        "uid": "uid123",
        "description": "this is boy"
      },
      {
        "id": 2,
        "name": "demi",
        "uid": "uid124",
        "description": "this is girl"
      },
      {
        "id": 3,
        "name": "xxx",
        "uid": "uid125",
        "description": "this is test user"
      },
      {
        "id": 4,
        "name": "testu",
        "uid": "uid126",
        "description": "this is test user5"
      },
      {
        "id": 5,
        "name": "testu2",
        "uid": "uid127",
        "description": "this is test user4"
      },
      {
        "id": 6,
        "name": "testu",
        "uid": "uid128",
        "description": "this is test user2"
      },
      {
        "id": 7,
        "name": "testu2",
        "uid": "uid129",
        "description": "this is test user9"
      }
    ]
  }
}
```


Body: 
(api调用次数查询-利用graphql中mutation类型实现)
```
{
	"query":"mutation muType {invokeCount}"
}
```
Result: 
```
{
  "data": {
    "invokeCount": 2
  }
}
```

Body: 
(查询query类型)
```
{
	"query":"{__schema { queryType { name, fields { name, description} }}}"
}
```
Result: 
```
{
  "data": {
    "__schema": {
      "queryType": {
        "name": "queryTest",
        "fields": [
          {
            "name": "getUsers",
            "description": "get all User info"
          },
          {
            "name": "getUserById",
            "description": "get single User info"
          }
        ]
      }
    }
  }
}
```


Body: 
(查询mutation类型)
```
{
	"query":"{__schema { mutationType { name, fields { name, description} }}}"
}
```
Result: 
```
{
  "data": {
    "__schema": {
      "mutationType": {
        "name": "mutationTest",
        "fields": [
          {
            "name": "invokeCount",
            "description": "api invoke counts"
          }
        ]
      }
    }
  }
}
```
