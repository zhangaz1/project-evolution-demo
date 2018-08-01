gulp.task('static-client', () => {
	return gulp.src(config.files.clientStatics)
		.pipe(gulp.dest(config.paths.distClient));
});