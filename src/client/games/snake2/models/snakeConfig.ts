import Vector from './../types/vector.js';

import ISnakeConfig from '../interfaces/iSnakeConfig.js';

import GameModes from './../enums/gameModes.js';
import Point from './point.js';

export { SnakeConfig };
export default class SnakeConfig implements ISnakeConfig {
	constructor(
		public defaultLength: number = 3,
		public defaultStep: Vector = new Point(1, 0),
		public gameMode: GameModes = GameModes.NoWalls,
	) { }
}