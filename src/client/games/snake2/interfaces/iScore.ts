import IFood from './iFood.js';

export default interface IScore {
	score: number;
	level: number;

	increase(food: IFood): void;
}