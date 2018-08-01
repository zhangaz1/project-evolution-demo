const path = require('path');

const srcClient = config.paths.srcClient;
const tsconfig = path.join(srcClient, config.configs.tsconfig);
const tsProject = plugins.typescript.createProject(tsconfig);

gulp.task('build-ts-client', () => {
	const interFile = path.join(srcClient, '**/*.ts');
	const sourcemaps = plugins.sourcemaps;

	return gulp.src(interFile)
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.distClient));
});