const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	() => {
		return gulp.watch(
			config.files.clientStatics,
			staticChangeHandler
		);
	}
);