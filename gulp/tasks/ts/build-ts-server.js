const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	() => {
		return buildTsServer(
			config.files.serverTs,
			config.paths.distServer
		);
	}
);