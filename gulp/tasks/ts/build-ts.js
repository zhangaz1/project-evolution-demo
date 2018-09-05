const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	plugins.sequence(
		'build-ts-server',
		'build-ts-client'
	)
);