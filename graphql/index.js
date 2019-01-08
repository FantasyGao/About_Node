const Koa = require('koa');
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
const { graphql } = require('graphql');

const app = new Koa();
const router = new Router();

const schema = require('./graphql');
const mysqlCon = require('./mysql');

app.use(bodyparser());

router.post('/mysql', async ctx=>{
    let data = await mysqlCon.pifySelect('SELECT * from  Tab_User_Info')
    ctx.body = JSON.stringify(data, null, 2);
});

router.post('/graphql', async ctx=>{
    let query = ctx.request.body.query
    console.log('query=>', query)
    let result = await graphql(schema, query)
    ctx.body = JSON.stringify(result, null, 2);
});

app.use(router.routes())

app.use(ctx=>{
    ctx.body = "not find router!"
})


app.listen(9991, '127.0.0.1', ()=>{
    console.log('http://127.0.0.1:9991 is runing!');
});
