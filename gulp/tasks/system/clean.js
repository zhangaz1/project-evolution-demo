const del = require('del');
const distFilePattern = path.join(config.paths.dist, '**/*');

gulp.task(
	getTaskName(path.basename(__filename)),
	cb => del(distFilePattern, cb)
);