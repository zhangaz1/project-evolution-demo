const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	plugins.sequence(
		'clean',
		'copy-statics',
		'build-ts'
	)
);