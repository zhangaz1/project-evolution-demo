import Food from './food.js';

export default interface Score {
	score: number;
	level: number;

	increase(food: Food): void;
}