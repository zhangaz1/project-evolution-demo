const path = require('path');

const srcServer = config.paths.srcServer;
const tsconfig = path.join(srcServer, config.configs.tsconfig);
const tsProject = plugins.typescript.createProject(tsconfig);

gulp.task('build-ts-server', () => {
	const interFile = path.join(srcServer, '**/*.ts');
	var tsResult = gulp.src(interFile)
		.pipe(tsProject());

	return tsResult.js
		.pipe(gulp.dest(config.paths.distServer));
});