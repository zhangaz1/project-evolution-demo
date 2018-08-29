const execa = require('execa');

const ts = plugins.typescript;

global.getTaskName = getTaskName;
global.buildTsClient = buildTsClient;
global.buildTsServer = buildTsServer;
global.copyStatic = copyStatic;
global.getTargetDir = getTargetDir;
global.staticChangeHandler = staticChangeHandler;
global.exec = exec;

// return void (0);

function buildTsClient(pathPatterns, output) {
	const clientTsProject = ts.createProject(config.configs.clientTsconfig);
	return buildTs(pathPatterns, output, clientTsProject);
}

function buildTsServer(pathPatterns, output) {
	const serverTsProject = ts.createProject(config.configs.serverTsconfig);
	return buildTs(pathPatterns, output, serverTsProject);
}

function buildTs(pathPatterns, output, tsProject) {
	const sourcemaps = plugins.sourcemaps;

	return gulp.src(pathPatterns)
		.pipe(debug('read ts'))
		.pipe(sourcemaps.init())
		.pipe(tsProject())
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(output))
		.pipe(debug('builded js'));
}

function copyStatic(pathPatterns, output) {
	return gulp.src(pathPatterns)
		.pipe(debug('read static'))
		.pipe(gulp.dest(output))
		.pipe(debug('write static'));
}

function debug(title) {
	return plugins.debug({
		title: title
	});
}

function getTaskName(fullPath) {
	const fileName = path.basename(fullPath);
	return path.basename(fileName, '.js');
}

function getTargetDir(filePath) {
	const src = config.paths.src;
	const srcFull = path.resolve(src);

	const targetFilePath = filePath.replace(srcFull, config.paths.dist);

	return path.dirname(targetFilePath);
}

function staticChangeHandler(event) {
	const filePath = event.path;
	const targetDir = getTargetDir(filePath);
	return copyStatic(
		filePath,
		targetDir
	);
}

function exec(cmd, options) {
	return execa(cmd, options);
}