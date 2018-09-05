const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	() => {
		return copyStatic(
			config.files.serverStatics,
			config.paths.dist
		);
	}
);