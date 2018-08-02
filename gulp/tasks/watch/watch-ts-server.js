gulp.task(
	getTaskName(path.basename(__filename)),
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