import { join, normalize } from 'path';
import * as serve from 'koa-static';

const clientLibsFolder: string = getClientLibsFolder();
export default serve(clientLibsFolder);

function getClientLibsFolder(): string {
	const clientLibsFolder = join(__dirname, './../../../node_modules'); // './../../../bower_components'
	return normalize(clientLibsFolder);
}