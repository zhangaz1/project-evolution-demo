require('./gulp/imports');
require('./gulp/config');
require('./gulp/common.js');

const loadTasks = require('require-dir');
loadTasks('./gulp/tasks', {
	recurse: true
});