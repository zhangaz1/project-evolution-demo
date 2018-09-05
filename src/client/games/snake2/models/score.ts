import {
	IFood,
	IScore,
} from './../interfaces/index.js';

export { Score };
export default class Score implements IScore {
	constructor(
		public score: number = 0,
		public level: number = 1,
	) { }

	public increase(food: IFood): void {
		this.score += food.power * this.level;
	}
}