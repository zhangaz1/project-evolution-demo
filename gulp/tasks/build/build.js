gulp.task(
	getTaskName(path.basename(__filename)),
	plugins.sequence(
		'clean',
		'copy-statics',
		'build-ts'
	)
);