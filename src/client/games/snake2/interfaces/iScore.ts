import {
	IFood
} from './index.js';

export { IScore };
export default interface IScore {
	score: number;
	level: number;

	increase(food: IFood): void;
}