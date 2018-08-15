import Game from './game.js';

interface GameModule {
	id: number;
	name: string;
	describtion;

	newGame(env): Promise<Game>;
}

export default GameModule;