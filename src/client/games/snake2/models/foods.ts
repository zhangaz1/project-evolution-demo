import {
	IPoint,
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

export { Foods };
export default class Foods implements IFoods<IFood> {
	readonly foods: IFood[] = [];

	constructor(
		private venue: IVenue = new Venue(),
		private foodsConfig: IFoodsConfig = new FoodsConfig(),
	) {
		this.init();
	}

	public eat(position: IPoint): IFood {
		return this.foods.find(
			food => food.position.isEqual(position)
		);
	}

	private init() {
		for (let i = 0; i < this.foodsConfig.foods; i++) {
			const position = this.venue.randomPosition();
			this.foods.push(new Food(position));
		}
	}
}