const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	cb => {
		const shell = exec('nodemon', ['-harmony']);
		shell.stdout.pipe(process.stdout);
		return cb();
	}
);