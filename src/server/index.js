const Koa = require('koa');

const router = require('./router.js');
const static = require('./static.js');

const app = new Koa();

app.use(static)
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000);
