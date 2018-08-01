gulp.task('clean', () => {
	return gulp.src(config.paths.dist, { read: false })
		.pipe(plugins.clean());
});