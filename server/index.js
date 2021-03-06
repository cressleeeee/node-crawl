const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const {resolve} = require('path');


app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}));

app.use(async (ctx, next) => {
    ctx.type = 'text/html;charset=utf-8';
    await ctx.render('index', {
        aa: 'asd',
        ss: 'sssfffsss'
    });
});

app.listen(3000);
console.log('server running localhost:3000');