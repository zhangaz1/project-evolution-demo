import IFood from './food.js';

export default interface Score {
	score: number;
	level: number;

	increase(food: IFood): void;
}