let Koa = require('koa')
let app = new Koa()
app.use(async (ctx, next) => {
    let StartTime = new Date().getTime()
    // console.log(ctx.status);//在body前运行是404 之后运行是200 
    await next()
    let EndTime = new Date().getTime()
    let Time = EndTime - StartTime //启动所需时间
    ctx.body = Time
});
app.use(async (ctx, next) => {
    await next()
});
let Delay = () => {
    return new Promise((resolve, reject) => {
        console.log(11111111);

    })
}
app.use(async (ctx, next) => {

});
app.listen(3000, () => {
    console.log('服务启动成功');
});                         