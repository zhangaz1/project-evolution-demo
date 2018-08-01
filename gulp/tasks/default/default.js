gulp.task('default',
	plugins.sequence('build', 'watch')
);