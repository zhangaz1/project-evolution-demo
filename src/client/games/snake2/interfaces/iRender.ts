import {
	ICell
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

	renderSnakeHead(head: ICell): void;
	renderSnakeNeck(neck: ICell): void;
	revertSnakeTail(tail: ICell): void;
}