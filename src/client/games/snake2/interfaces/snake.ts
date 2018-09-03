import IPoint from './point.js';
import IFoods from './foods.js';
import IFood from './food.js';

export default interface Snake {
	readonly head: IPoint;
	move(foods: IFoods<IFood>): IFood;
}