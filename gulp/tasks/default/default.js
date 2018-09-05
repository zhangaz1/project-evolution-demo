const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	plugins.sequence(
		'build',
		'watch',
		'run-web-server',
		'browser-sync'
	)
);