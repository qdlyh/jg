var http = require('http');


const Koa = require('koa');
const app = new Koa();

app.use(async(ctx)=>{
    ctx.body = 'hello lyh'
})
app.listen(8888);
console.log('Server running at http://127.0.0.1:8888/');