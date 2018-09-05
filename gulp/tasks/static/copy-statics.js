const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	plugins.sequence(
		'copy-static-client',
		// 'copy-static-server'
	)
);