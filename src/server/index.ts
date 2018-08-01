import * as Koa from 'koa';

import staticFiles from './router/static';
import clientLibs from './router/clientLibs';
import router from './router/router';

const app = new Koa();
//
app.use(staticFiles)
	.use(clientLibs)
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000);