const fileFullPath = __filename;

const del = require('del');
const distFilePattern = path.join(config.paths.dist, '**/*');

gulp.task(
	getTaskName(fileFullPath),
	cb => del(distFilePattern, cb)
);