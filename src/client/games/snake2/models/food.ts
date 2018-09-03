import IFood from './../interfaces/food.js';

import Colors from './../enums/colors.js';

import Point from './point.js';

export default class Food implements IFood {
	constructor(
		public position = new Point(),
		public color = Colors.Yellow,
		public power: number = 1,
	) { }
}