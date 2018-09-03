import IFoods from './foods.js';
import IFood from './food.js';

export default interface Snake {
	move(foods: IFoods<IFood>): IFood;
}