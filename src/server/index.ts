import * as Koa from 'koa';

import staticFiles from './router/static.js';
import clientLibs from './router/clientLibs.js';
import router from './router/router.js';

const app = new Koa();

app.use(staticFiles)
	.use(clientLibs)
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000);