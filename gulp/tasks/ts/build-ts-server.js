gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		return buildTsServer(
			config.files.serverTs,
			config.paths.distServer
		);
	}
);