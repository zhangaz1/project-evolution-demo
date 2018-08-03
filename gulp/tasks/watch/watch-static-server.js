gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		return gulp.watch(
			config.files.serverStatics,
			staticChangeHandler
		);
	}
);