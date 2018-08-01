gulp.task('watch-ts-client', () => {
	gulp.watch(config.files.clientTs, event => {
		console.log(event.path);
	});
});