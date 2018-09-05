const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	() => {
		return buildTsClient(
			config.files.clientTs,
			config.paths.distClient
		);
	}
);
