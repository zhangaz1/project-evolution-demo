require('./gulp/imports');
require('./gulp/config');

const loadTasks = require('require-dir');

loadTasks('./gulp/tasks', {
	recurse: true
});