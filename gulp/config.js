const join = require('path').join;

const tsconfig = 'tsconfig.json';
const paths = getPaths();

global.config = buildConfig();

// return void (0);

function buildConfig() {
	return {
		paths: paths,
		files: getFiles(paths),
		configs: {
			serverTsconfig: join(paths.srcServer, tsconfig),
			clientTsconfig: join(paths.srcClient, tsconfig)
		}
	};
}

function getPaths() {
	const paths = {
		src: './src',
		dist: './dist'
	};

	paths.srcServer = join(paths.src, 'server');
	paths.srcClient = join(paths.src, 'client');

	paths.distServer = join(paths.dist, 'server');
	paths.distClient = join(paths.dist, 'client');

	return paths;
}

function getFiles(paths) {
	return {
		serverTs: [
			join(paths.srcServer, '**/*.ts')
		],
		serverStatics: [
			join(paths.src, 'boot.js')
		],
		clientTs: [
			'!' + join(paths.srcClient, 'libs/**/*.*'),
			join(paths.srcClient, '**/*.ts')
		],
		clientStatics: [
			join(paths.srcClient, '**/images/**/*.*'),
			join(paths.srcClient, '**/*.css'),
			join(paths.srcClient, '**/*.html'),
			join(paths.srcClient, '**/libs/**/*.*')
		]
	};
}