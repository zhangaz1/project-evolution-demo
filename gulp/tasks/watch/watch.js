gulp.task(
	getTaskName(path.basename(__filename)),
	plugins.sequence([
		'watch-ts-server',
		// 'watch-static-server',
		'watch-ts-client',
		'watch-static-client'
	])
);