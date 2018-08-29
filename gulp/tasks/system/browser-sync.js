const fileFullPath = __filename;

gulp.task(
	getTaskName(fileFullPath),
	cb => {
		setTimeout(() => {
			const shell = exec('browser-sync', ['start', '--config', 'bs-config.js'])
			shell.stdout.pipe(process.stdout);
		}, 1000);
		return cb();
	}
);