import {
	IFood,
	IScore,
} from './../interfaces/index.js';

export { Score };
export default class Score implements IScore {
	private _score: number;
	private _level: number;

	public get score() {
		return this._score;
	}

	public get level() {
		return this._level;
	}

	constructor(
		score: number = 0,
		level: number = 1,
	) {
		this._score = score;
		this._level = level;
	}

	public increaseScore(food: IFood): void {
		this._score += food.power * this._level;
	}

	public increaseLevel() {
		this._level++;
	}
}