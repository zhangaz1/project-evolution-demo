const Koa = require('koa');

const router = require('./router/router.js');
const static = require('./router/static.js');
const clientLibs = require('./router/clientLibs.js');

const app = new Koa();

app.use(static)
	.use(clientLibs)
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000);
