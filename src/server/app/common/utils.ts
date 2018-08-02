import { join, normalize } from 'path';

import { ROOT_PATH as rootPath } from './../../const.js';

export {
	getAbsolutPath,
};

// return void (0);

function getAbsolutPath(relativePath: string): string {
	var fullPath = join(rootPath, relativePath);
	return normalize(fullPath);
}