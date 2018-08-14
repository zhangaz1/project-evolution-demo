gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		return copyStatic(
			config.files.clientStatics,
			config.paths.distClient
		);
	}
);