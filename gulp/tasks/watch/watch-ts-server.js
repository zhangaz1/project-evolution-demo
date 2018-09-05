const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	() => {
		return gulp.watch(
			config.files.serverTs,
			tsServerChangedHandler
		);
	}
);

function tsServerChangedHandler(event) {
	const filePath = event.path;
	const targetDir = getTargetDir(filePath);
	return buildTsServer(
		filePath,
		targetDir
	);
}