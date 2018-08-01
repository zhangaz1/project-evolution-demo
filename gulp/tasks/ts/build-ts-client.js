const path = require('path');

const srcClient = config.paths.srcClient;
const tsconfig = path.join(srcClient, config.configs.tsconfig);
const tsProject = plugins.typescript.createProject(tsconfig);

gulp.task('build-ts-client', () => {
	const interFile = path.join(srcClient, '**/*.ts');
	var tsResult = gulp.src(interFile)
		.pipe(tsProject());

	return tsResult.js
		.pipe(gulp.dest(config.paths.distClient));
});