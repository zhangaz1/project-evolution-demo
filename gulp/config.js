const path = require('path');
const join = path.join;

global.config = {
	paths: getPaths(),
	configs: {
		tsconfig: 'tsconfig.json'
	},
	enterFile: {
		server: 'index.ts',
		client: 'index.ts'
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