gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		gulp.watch(config.files.clientTs, event => {
			const filePath = event.path;
			const targetDir = getTargetDir(filePath);
			return buildTsClient(
				filePath,
				targetDir
			);
		});
	}
);