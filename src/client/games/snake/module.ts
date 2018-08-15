import gameModule from './../../core/models/game.js';

import gameBoot from './boot.js';
import snake from './snake.js';

function boot(env): Promise<any> {
	return gameBoot(snake);
}

const snakeModule: gameModule = {
	id: 1,
	name: 'snake 1',
	describtion: 'simple snake game',
	boot
};

export default snakeModule;