const path = require('path');

const serve = require('koa-static')

let clientLibsFolder = getClientLibsFolder();
module.exports = serve(clientLibsFolder);

function getClientLibsFolder() {
	let clientLibsFolder = path.join(__dirname, './../../../bower_components');
	return path.normalize(clientLibsFolder);
}
