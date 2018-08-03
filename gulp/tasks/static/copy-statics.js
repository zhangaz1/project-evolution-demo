gulp.task(
	getTaskName(path.basename(__filename)),
	plugins.sequence(
		'copy-static-client',
		// 'copy-static-server'
	)
);