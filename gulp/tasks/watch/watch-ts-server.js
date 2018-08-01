gulp.task('watch-ts-server', () => {
	gulp.watch(config.files.serverTs, event => {
		console.log(event.path);
	});
});