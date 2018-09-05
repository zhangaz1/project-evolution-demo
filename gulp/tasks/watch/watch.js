const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	plugins.sequence([
		'watch-ts-server',
		// 'watch-static-server',
		'watch-ts-client',
		'watch-static-client'
	])
);