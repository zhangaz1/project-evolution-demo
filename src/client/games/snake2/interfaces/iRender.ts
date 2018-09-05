import IFoods from './iFoods.js';
import IFood from './iFood.js';
import ISnake from './iSnake.js';
import IScore from './iScore.js';
import Cell from '../types/cell.js';

export default interface IRender {
	renderVenue(): void;
	renderFoods(foods: IFoods<IFood>): void;
	renderSnake(snake: ISnake): void;
	renderScore(score: IScore): void;

	renderSnakeHead(head: Cell): void;
	renderSnakeNeck(neck: Cell): void;
	revertSnakeTail(tail: Cell): void;
}