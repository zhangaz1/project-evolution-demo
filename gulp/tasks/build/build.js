gulp.task('build',
	plugins.sequence('clean', 'static-client', 'build-ts')
);