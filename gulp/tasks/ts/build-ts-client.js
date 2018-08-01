gulp.task('build-ts-client', () => {
	const tsProject = plugins.typescript.createProject(config.configs.clientTsconfig);
	const sourcemaps = plugins.sourcemaps;

	return gulp.src(config.files.clientTs)
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.distClient));
});