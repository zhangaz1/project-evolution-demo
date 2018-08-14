const pluginsLoader = require('gulp-load-plugins');

global.path = require('path');
global.gulp = require('gulp');
global.plugins = loadPlugins();

// return void (0);

function loadPlugins() {
	return pluginsLoader({
		pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
		scope: ['dependencies', 'devDependencies'],
		// config: 'package.json',
		replaceString: /^gulp(-|\.)/,
		camelize: true,
		lazy: true,
		rename: {
			// 'gulp-fileSize': 'size'
		}
	});
}