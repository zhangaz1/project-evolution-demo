global.gulp = require('gulp');
global.plugins = require('gulp-load-plugins')({
	pattern: ['gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
	scope: ['dependencies', 'devDependencies'],
	// config: 'package.json',
	replaceString: /^gulp(-|\.)/,
	camelize: true,
	lazy: true,
	rename: {
		'gulp-sequence': 'gulpSequence'
	}
});