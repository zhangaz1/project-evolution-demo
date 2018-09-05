import IFoods from '../interfaces/iFoods.js';

import Point from './point.js';
import Food from './food.js';
import Venue from './venue.js';
import FoodsConfig from './foodsConfig.js';

export { Foods };
export default class Foods implements IFoods<Food> {
	readonly foods: Food[] = [];

	constructor(
		private venue: Venue = new Venue(),
		private foodsConfig: FoodsConfig = new FoodsConfig(),
	) {
		this.init(foodsConfig);
	}

	public eat(position: Point): Food {
		return this.foods.find(
			food => food.position.isEqual(position)
		);
	}

	private init(foodsConfig) {
		for (let i = 0; i < foodsConfig.foods; i++) {
			const position = this.venue.randomPosition();
			this.foods.push(new Food(position));
		}
	}
}