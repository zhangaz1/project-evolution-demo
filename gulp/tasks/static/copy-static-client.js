const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	() => {
		return copyStatic(
			config.files.clientStatics,
			config.paths.distClient
		);
	}
);