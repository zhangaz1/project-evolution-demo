gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		gulp.watch(config.files.clientStatics, event => {
			const filePath = event.path;
			const targetDir = getTargetDir(filePath);
			return copyStatic(
				filePath,
				targetDir
			);
		});
	}
);