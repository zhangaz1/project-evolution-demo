const path = require('path');

const serve = require('koa-static')

let clientFolder = getClientFolder();
module.exports = serve(clientFolder);

function getClientFolder() {
	let clientFolder = path.join(__dirname, './../../client');
	return path.normalize(clientFolder);
}
