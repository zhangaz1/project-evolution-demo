import gameBoot from './boot.js';
import snake from './snake.js';

function boot(env): Promise<any> {
	return gameBoot(snake);
}

export {
	boot
};