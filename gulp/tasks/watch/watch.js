gulp.task('watch',
	plugins.sequence([
		'watch-ts-server',
		'watch-ts-client',
		'watch-static-client'
	])
);