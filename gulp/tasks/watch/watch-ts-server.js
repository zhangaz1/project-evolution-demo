gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		gulp.watch(config.files.serverTs, event => {
			const filePath = event.path;
			const targetDir = getTargetDir(filePath);
			return buildTsServer(
				filePath,
				targetDir
			);
		});
	}
);