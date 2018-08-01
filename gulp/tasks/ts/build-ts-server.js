gulp.task('build-ts-server', () => {
	const tsProject = plugins.typescript.createProject(config.configs.serverTsconfig);
	const sourcemaps = plugins.sourcemaps;

	return gulp.src(config.files.serverTs)
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.distServer));
});