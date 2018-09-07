import {
	GameModes,
} from './../enums/index.js';

import {
	IVector,
} from './../types/index.js';

import {
	ISnakeConfig,
} from './../interfaces/index.js';

import {
	Point,
} from './index.js';

export { SnakeConfig };
export default class SnakeConfig implements ISnakeConfig {
	constructor(
		public defaultLength: number = 3,
		public defaultStep: IVector = new Point(1, 0),
	) { }
}