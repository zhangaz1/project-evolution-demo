import {
	Directions
} from './../enums/index.js';

import {
	IPoint,
	IScore,
	IFood,
	IFoods,
} from './index.js';

export { ISnake };
export default interface ISnake {
	readonly head: IPoint;
	readonly neck: IPoint;
	readonly tail: IPoint;
	readonly body: IPoint[];
	readonly isDied: boolean;
	readonly score: IScore;

	turn(direction: Directions): void;
	move(foods: IFoods<IFood>): IFood;
}