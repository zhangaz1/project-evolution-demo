gulp.task(
	getTaskName(path.basename(__filename)),
	plugins.sequence(
		'build',
		'watch'
	)
);