import * as Koa from 'koa';

import IApp from '../fw/IApp.js';
import IAppContext from '../fw/IAppContext.js';

import staticFiles from './router/static.js';
import clientLibs from './router/clientLibs.js';
import router from './router/router.js';

export default class App implements IApp {
	private app: Koa;

	constructor() {
		this.app = new Koa();
	}

	/**
	 * start
	 */
	public start(port?: number): Promise<null> {
		const context: IAppContext = {
			app: this
		};

		this.app.use(staticFiles)
			.use(clientLibs)
			.use(router.routes())
			.use(router.allowedMethods());

		this.app.listen(3000);

		return Promise.resolve(null);
	}
}