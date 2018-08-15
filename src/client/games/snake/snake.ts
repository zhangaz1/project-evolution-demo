import Game from './../../core/models/game.js';

import Directions from './types/directions.js';
import Colors from './types/colors.js';

import {
	GROUND_COLUMNS,
} from './config.js';

import {
	PlayGround,
	CELLS,
	CELLS_MAX_LENGTH,
} from './playGround.js';


const KEYCODE_STEP_MAP: Directions = {
	37: -1, 				// left
	38: -GROUND_COLUMNS, 	// top
	39: 1, 					// right
	40: GROUND_COLUMNS 		// down
};
const MAX_WIDTH_INDEX = GROUND_COLUMNS - 1;


class Snake implements Game {
	private playGround: PlayGround;

	private snake: number[];
	private food: number;
	private moveStep: number;
	private snakeHead: number;
	private next: Function;
	private timer: number;

	constructor(private readonly canvas: Element) {
		this.snake = [2, 1];
		this.food = 3;
		this.moveStep = 1;
		// this.snakeHead = this.snake[0];
		this.next = this.move.bind(this);
		this.timer = 0;

		this.playGround = new PlayGround(canvas);
	}

	public destroy() {
		document.onkeydown = null;
		if (this.timer) {
			clearTimeout(this.timer);
		}

		this.playGround.destroy();
		this.playGround = null;

		$(this.canvas).remove();
	}

	async start() {
		document.onkeydown = (e: KeyboardEvent) => {
			let keyCode = (e || <KeyboardEvent>event).keyCode;
			this.updateMoveStep(keyCode);
		};

		this.move();

		return Promise.resolve();
	}

	async stop() {
		this.destroy();
		return Promise.resolve();
	}


	private updateMoveStep(keyCode) {
		let newStep = KEYCODE_STEP_MAP[keyCode];

		if (this.isMoveBack(newStep)) {
			return;
		}

		this.moveStep = newStep || this.moveStep;
	}

	private isMoveBack(newStep) {
		return this.moveStep &&
			(this.moveStep === -newStep);
	}

	private move() {
		this.unshiftNewHead();
		if (this.isGameOver()) {
			return console.log("GAME OVER");
		}

		this.drawHead();
		if (this.isEatFood()) {
			this.randomNewFood();
			this.drawFood();
		} else {
			let tailGround = this.snake.pop();
			this.drawTailGround(tailGround);
		}
		this.setNextMove();
	}

	private drawHead() {
		this.draw(this.snakeHead, Colors.Lime);
	}

	private drawFood() {
		this.draw(this.food, Colors.Yellow);
	}

	private drawTailGround(tailGround) {
		this.draw(tailGround, Colors.Black);
	}

	private draw(cellIndex, color) {
		this.playGround
			.fillCell(cellIndex, color);
	}

	private setNextMove() {
		this.timer = setTimeout(this.next, 130);
	}

	private isEatFood() {
		return this.snakeHead === this.food;
	}

	private unshiftNewHead() {
		this.snakeHead = this.snake[0] + this.moveStep;
		this.snake.unshift(this.snakeHead);
	}

	private randomNewFood() {
		do {
			this.food = this.randomPosition();
		} while (this.isFoodOnSelf());
	}

	private isFoodOnSelf() {
		return this.snake.indexOf(this.food) >= 0;
	}

	private randomPosition() {
		return ~~(Math.random() * CELLS);
	}

	private isGameOver() {
		return this.isPopSelf() ||
			this.isPopTop() ||
			this.isPopBottom() ||
			this.isPopRight() ||
			this.isPopLeft();
	}

	private isPopSelf() {
		return this.snake.indexOf(this.snakeHead, 1) > 0;
	}

	private isPopTop() {
		return this.snakeHead < 0;
	}

	private isPopBottom() {
		return this.snakeHead > CELLS_MAX_LENGTH;
	}

	private isPopRight() {
		return this.isMoveRight() &&
			this.isHeadToNextRowFirst();
	}

	private isHeadToNextRowFirst() {
		return this.snakeHead % GROUND_COLUMNS === 0;
	}

	private isMoveRight() {
		return this.moveStep === 1;
	}

	private isPopLeft() {
		return this.isMoveLeft() &&
			this.isHeadToPreviousRowLast();
	}

	private isHeadToPreviousRowLast() {
		return this.snakeHead % GROUND_COLUMNS === MAX_WIDTH_INDEX;
	}

	private isMoveLeft() {
		return this.moveStep === -1;
	}
}


export default Snake;