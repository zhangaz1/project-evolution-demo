const join = require('path').join;

const tsconfig = 'tsconfig.json';
const paths = getPaths();

global.config = {
	paths: paths,
	files: getFiles(paths),
	configs: {
		serverTsconfig: join(paths.srcServer, tsconfig),
		clientTsconfig: join(paths.srcClient, tsconfig)
	}
};

return void (0);

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
		clientTs: [
			join(paths.srcClient, '**/*.ts')
		],
		clientStatics: [
			join(paths.srcClient, '**/*.css'),
			join(paths.srcClient, '**/*.html')
		]
	};
}