const path = require('path');

const serve = require('koa-static')

const clientFolder = path.join(path.dirname(__dirname), 'client');

module.exports = serve(clientFolder);