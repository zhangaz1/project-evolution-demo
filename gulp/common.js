const sourcemaps = plugins.sourcemaps;

const ts = plugins.typescript;
const clientTsProject = ts.createProject(config.configs.clientTsconfig);
const serverTsProject = ts.createProject(config.configs.serverTsconfig);

global.getTaskName = getTaskName;
global.buildTsClient = buildTsClient;
global.buildTsServer = buildTsServer;
global.copyStatic = copyStatic;
global.getTargetDir = getTargetDir;

// return void (0);

function buildTsClient(pathPatterns, output) {
	return buildTs(pathPatterns, output, clientTsProject);
}

function buildTsServer(pathPatterns, output) {
	return buildTs(pathPatterns, output, serverTsProject);
}

function buildTs(pathPatterns, output, tsProject) {
	return gulp.src(pathPatterns)
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(output));
}

function copyStatic(pathPatterns, output) {
	return gulp.src(pathPatterns)
		.pipe(gulp.dest(output));
}

function getTaskName(fileName) {
	return path.basename(fileName, '.js');
}

function getTargetDir(filePath) {
	const src = config.paths.src;
	const srcFull = path.resolve(src);

	const targetFilePath = filePath.replace(srcFull, config.paths.dist);

	return path.dirname(targetFilePath);
}