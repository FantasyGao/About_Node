var express = require('koa');
var app =new express();

app.use(async (ctx, next)=> {
    console.log('middleware1 开始');
    await next();
    console.log('middleware1 结束');
})

app.use(async (ctx, next) =>{
    console.log('middleware2 开始');
    setTimeout(() => {
        console.log('middleware2 结束-setiout');
        next();
    }, 2000);
    // await next();
    console.log('middleware2 结束')
})

app.use(async (ctx, next) =>{
    console.log('middleware3 开始');
    await next();
    console.log('middleware3 结束');
})

app.use(ctx => {
    ctx.body = 'Hello World!';
    console.log('123456')
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


