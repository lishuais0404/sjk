const Koa = require('koa')
let app = new Koa()
const static = require('koa-static')
const router = require('koa-router')()//处理路由
const path = require('path')
const query = require('./db/index')
app.use(static(path.join(process.cwd(), './public/')));

app.use(router.routes());
app.use(router.allowedMethods());

router.get('/userlist', async (ctx) => {
    ctx.body = [1, 2, 3]
});
router.get('/login', async (ctx, next) => {
    let data = await query()
    console.log(data);
    ctx.body = {
        data
    }

});
app.listen(3000, () => {
    console.log(`服务启动`);
});
