import IFoods from './foods.js';
import Food from './food.js';
import ISnake from './snake.js';
import IScore from './score.js';
import Cell from './../types/cell.js';

export default interface Render {
	renderVenue(): void;
	renderFoods(foods: IFoods<Food>): void;
	renderSnake(snake: ISnake): void;
	renderScore(score: IScore): void;

	renderSnakeHead(head: Cell): void;
	renderSnakeNeck(neck: Cell): void;
	revertSnakeTail(tail: Cell): void;
}