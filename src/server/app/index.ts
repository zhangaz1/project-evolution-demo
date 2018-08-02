declare module NodeJS {
	interface Global {
		my: any
	}
}

console.log('my', 'xxxxxxxxxxxx');

import * as Koa from 'koa';

// import my from './settings/imports.js';
// global['my'] = my;

import staticFiles from './router/static.js';
import clientLibs from './router/clientLibs.js';
import router from './router/router.js';

const app = new Koa();

app.use(staticFiles)
	.use(clientLibs)
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(3000);
