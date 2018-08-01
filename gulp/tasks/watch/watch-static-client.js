gulp.task('watch-statics-client', () => {
	gulp.watch(config.files.clientStatics, event => {
		console.log(event.path);
	});
});