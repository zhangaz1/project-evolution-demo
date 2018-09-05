import IPoint from './iPoint.js';
import IFoods from './iFoods.js';
import IFood from './iFood.js';
import IScore from './iScore.js';
import Directions from '../enums/directions.js';

export default interface ISnake {
	readonly head: IPoint;
	readonly score: IScore;

	turn(direction: Directions): void;
	move(foods: IFoods<IFood>): IFood;
}