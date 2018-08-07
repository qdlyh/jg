const mysql = require('mysql');
const Koa = require('koa'); 
const Router = require('koa-router');
const koaBody = require('koa-body');
const router = new Router();
const app = new Koa();
app.use(koaBody());
app.use(ctx => {
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
});
app.use(router.routes()).use(router.allowedMethods());
app.listen(8888, () => {
    console.log('http://127.0.0.1:8888')
})