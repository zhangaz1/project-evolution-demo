gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		return gulp.src(config.paths.dist, { read: false })
			.pipe(plugins.clean());
	}
);