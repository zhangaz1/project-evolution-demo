gulp.task(
	getTaskName(path.basename(__filename)),
	cb => {
		const shell = exec('nodemon', ['-harmony']);
		shell.stdout.pipe(process.stdout);
		return cb();
	}
);