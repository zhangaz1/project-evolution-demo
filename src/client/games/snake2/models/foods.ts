import {
	IPoint,
	IScore,
	IFood,
	IFoods,
	IFoodsConfig,
	IVenue,
} from './../interfaces/index.js';

import {
	Food,
	Venue,
	FoodsConfig,
} from './index.js';
import { IPosition } from '../types/index.js';

export { Foods };
export default class Foods implements IFoods<IFood> {
	readonly foods: IFood[] = [];

	constructor(
		private score: IScore,
		private venue: IVenue = new Venue(),
		private foodsConfig: IFoodsConfig = new FoodsConfig(),
	) {
		this.init();
	}

	public eat(position: IPoint): IFood {
		const foodIndex = this.findFoodIndex(position);
		if (foodIndex === -1) {
			return null;
		}

		const food = this.foods[foodIndex];
		this.deleteFood(foodIndex);
		this.initFoodIfEmpty();
		return food;
	}

	private initFoodIfEmpty() {
		if (this.isFoodsEmpty()) {
			this.score.increaseLevel();
			this.init();
		}
	}

	private isFoodsEmpty() {
		return this.foods.length === 0;
	}

	private findFoodIndex(position: IPosition) {
		return this.foods.findIndex(
			food => food.position.isEqual(position)
		);
	}

	private deleteFood(index) {
		this.foods.splice(index, 1);
	}

	private init() {
		for (let i = 0; i < this.foodsConfig.foods; i++) {
			const position = this.venue.randomPosition();
			this.foods.push(new Food(position));
		}
	}
}