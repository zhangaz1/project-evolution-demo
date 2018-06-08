const Koa = require('koa');

const static = require('./static.js');

const app = new Koa();

app.use(static);

app.listen(3000);
