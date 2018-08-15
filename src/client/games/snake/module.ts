import gameModule from './../../models/game.js';

import gameBoot from './boot.js';
import snake from './snake.js';

function boot(env): Promise<any> {
	return gameBoot(snake);
}

const snakeModule: gameModule = {
	boot
};

export default snakeModule;