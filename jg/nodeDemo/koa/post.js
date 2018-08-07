const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());
app.use(async (ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
            <h1>JSPang Koa2 request POST</h1>
            <form method="POST" action="/">
                <p>userName</p>
                <input name="userName" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>website</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `;
        ctx.body = html;
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let pastData = ctx.request.body
        ctx.body = pastData;
    } else {
        ctx.body = '<h1>404!</h1>';
    }

});


app.listen(8888, () => {
    console.log('Server running at http://127.0.0.1:8888/');
});