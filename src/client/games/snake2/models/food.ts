import {
	Colors,
} from './../enums/index.js';

import {
	IFood,
} from './../interfaces/index.js';

import {
	Point,
} from './index.js';

export { Food };
export default class Food implements IFood {
	constructor(
		public position,
		public color = Colors.Yellow,
		public power: number = 1,
	) { }
}