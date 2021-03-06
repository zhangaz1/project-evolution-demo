import * as Koa from 'koa';

import clientLibs from './router/clientLibs.js';
import router from './router/router.js';
import staticFiles from './router/static.js';

export {
	boot as default
}

// return void (0);

function boot() {
	const app = new Koa();

	app.use(staticFiles)
		.use(clientLibs)
		.use(router.routes())
		.use(router.allowedMethods());

	app.listen(3000);
}