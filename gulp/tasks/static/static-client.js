const path = require('path');
const join = path.join;

const srcClient = config.paths.srcClient;
const staticFiles = [
	join(srcClient, '**/*.html'),
	join(srcClient, '**/*.css')
];

gulp.task('static-client', () => {
	return gulp.src(staticFiles)
		.pipe(gulp.dest(config.paths.distClient));
});