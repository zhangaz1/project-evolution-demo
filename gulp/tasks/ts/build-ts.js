gulp.task(
	'build-ts',
	plugins.sequence(['build-ts-server', 'build-ts-client'])
);