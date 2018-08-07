const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
    ctx.body = 'hello router'
})
router.get('/koa', function (ctx, next) {
    ctx.body = 'hello koa'
})

router.get('/canshu', function (ctx, next) {
    ctx.body = ctx.query
})
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
});