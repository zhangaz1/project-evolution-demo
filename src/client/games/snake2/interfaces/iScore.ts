import {
	IFood
} from './index.js';

export { IScore };
export default interface IScore {
	readonly score: number;
	readonly level: number;

	increaseScore(food: IFood): void;
	increaseLevel(): void;
}