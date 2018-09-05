import {
	Cell
} from './../types/index.js';

import {
	IFoods,
	IFood,
	ISnake,
	IScore
} from './index.js';

export { IRender };
export default interface IRender {
	renderVenue(): void;
	renderFoods(foods: IFoods<IFood>): void;
	renderSnake(snake: ISnake): void;
	renderScore(score: IScore): void;

	renderSnakeHead(head: Cell): void;
	renderSnakeNeck(neck: Cell): void;
	revertSnakeTail(tail: Cell): void;
}