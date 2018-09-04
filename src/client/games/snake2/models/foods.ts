import IFoods from './../interfaces/foods.js';

import Point from './point.js';
import Food from './food.js';
import Venue from './venue.js';
import FoodsConfig from './foodsConfig.js';

export default class Foods implements IFoods<Food> {
	readonly foods: Food[] = [];

	constructor(
		private venue: Venue = new Venue(),
		private foodsConfig: FoodsConfig = new FoodsConfig(),
	) {
		this.init(foodsConfig);
	}

	public eat(position: Point): Food {
		return this.foods[0];
	}

	private init(foodsConfig) {
		for (let i = 0; i < foodsConfig.foods; i++) {
			const position = this.venue.randomPosition();
			this.foods.push(new Food(position));
		}
	}
}