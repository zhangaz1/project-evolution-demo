import IPoint from './point.js';
import IFoods from './foods.js';
import IFood from './food.js';
import Directions from './../enums/directions.js';

export default interface Snake {
	readonly head: IPoint;

	turn(direction: Directions): void;
	move(foods: IFoods<IFood>): IFood;
}