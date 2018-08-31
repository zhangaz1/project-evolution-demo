import Foods from './foods.js';
import Food from './food.js';

export default interface Snake {
	move(foods: Foods<Food>);
}