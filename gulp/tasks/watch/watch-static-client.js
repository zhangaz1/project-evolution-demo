gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		return gulp.watch(
			config.files.clientStatics,
			staticClientChangeHandler
		);
	}
);

function staticClientChangeHandler(event) {
	const filePath = event.path;
	const targetDir = getTargetDir(filePath);
	return copyStatic(
		filePath,
		targetDir
	);
}