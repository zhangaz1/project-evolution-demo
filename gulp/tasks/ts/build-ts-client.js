gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		return buildTsClient(
			config.files.clientTs,
			config.paths.distClient
		);
	}
);
