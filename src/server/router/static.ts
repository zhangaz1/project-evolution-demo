import { join, normalize } from 'path';
import * as serve from 'koa-static';

const clientFolder = getClientFolder();
export default serve(clientFolder);

function getClientFolder() {
	const clientFolder = join(__dirname, './../../client');
	return normalize(clientFolder);
}
