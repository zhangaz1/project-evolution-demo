gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		return copyStatic(
			config.files.serverStatics,
			config.paths.dist
		);
	}
);