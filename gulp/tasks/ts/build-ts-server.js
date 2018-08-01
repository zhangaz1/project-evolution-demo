const path = require('path');

const srcServer = config.paths.srcServer;
const tsconfig = path.join(srcServer, config.configs.tsconfig);
const tsProject = plugins.typescript.createProject(tsconfig);

gulp.task('build-ts-server', () => {
	const interFile = path.join(srcServer, '**/*.ts');
	const sourcemaps = plugins.sourcemaps;

	return gulp.src(interFile)
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(config.paths.distServer));
});