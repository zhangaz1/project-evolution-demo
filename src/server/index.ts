import IApp from './fw/IApp.js';
import App from './app/app.js';

bootApp();

// return void (0);

function bootApp() {
	const app: IApp = new App();
	app.start()
		.then(() => console.log('app started!'));
}