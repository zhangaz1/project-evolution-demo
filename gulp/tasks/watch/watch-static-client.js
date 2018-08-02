const path = require('path');

gulp.task('watch-static-client', () => {
	gulp.watch(config.files.clientStatics, event => {
		const filePath = event.path;
		const targetDir = getTargetDir(filePath);

		return gulp.src(filePath)
			.pipe(gulp.dest(targetDir));
	});
});

// return void (0);

function getTargetDir(filePath) {
	const src = config.paths.src;
	const srcFull = path.resolve(src);

	const targetFilePath = filePath.replace(srcFull, config.paths.dist);

	return path.dirname(targetFilePath);
}