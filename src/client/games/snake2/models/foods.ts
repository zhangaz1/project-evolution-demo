import IFoods from './../interfaces/foods.js';

import Point from './point.js';
import Food from './food.js';

export default class Foods implements IFoods<Food> {
	constructor(
		private foods: Food[] = []
	) { }

	public eat(position: Point) {
		return this.foods[0];
	}
}