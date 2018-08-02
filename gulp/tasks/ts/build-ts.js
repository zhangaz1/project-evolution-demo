gulp.task(
	getTaskName(path.basename(__filename)),
	plugins.sequence(
		'build-ts-server',
		'build-ts-client'
	)
);