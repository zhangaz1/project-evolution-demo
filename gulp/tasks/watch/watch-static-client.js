gulp.task(
	getTaskName(path.basename(__filename)),
	() => {
		return gulp.watch(
			config.files.clientStatics,
			staticChangeHandler
		);
	}
);