import {
	GameModes,
} from './../enums/index.js';

import {
	Vector,
} from './../types/index.js';

export { ISnakeConfig };
export default interface ISnakeConfig {
	defaultLength: number;
	defaultStep: Vector;
	gameMode: GameModes;
}