import IScore from '../interfaces/iScore.js';

import Food from './food.js';

export { Score };
export default class Score implements IScore {
	constructor(
		public score: number = 0,
		public level: number = 1,
	) { }

	public increase(food: Food): void {
		this.score += food.power * this.level;
	}
}