gulp.task(
	getTaskName(path.basename(__filename)),
	plugins.sequence(
		'clean',
		'copy-static-client',
		'build-ts'
	)
);