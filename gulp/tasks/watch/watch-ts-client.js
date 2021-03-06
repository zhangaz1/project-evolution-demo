const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	() => {
		return gulp.watch(
			config.files.clientTs,
			tsClientChangedHandler
		);
	}
);

function tsClientChangedHandler(event) {
	const filePath = event.path;
	const targetDir = getTargetDir(filePath);
	return buildTsClient(
		filePath,
		targetDir
	);
}