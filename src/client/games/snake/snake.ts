import Game from './../../core/models/game.js';

import Directions from './types/directions.js';

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
	private readonly playGround: PlayGround;

	private readonly snake: number[];
	private food: number;
	private moveStep: number;
	private snakeHead: number;
	private next: Function;

	constructor(canvas) {
		this.snake = [2, 1];
		this.food = 3;
		this.moveStep = 1;
		// this.snakeHead = this.snake[0];
		this.next = this.move.bind(this);

		this.playGround = new PlayGround(canvas);
	}

	async start() {
		const playGround = this.playGround;
		const snake = this.snake;
		let food = this.food;
		let moveStep = this.moveStep;
		let snakeHead = this.snakeHead;

		document.onkeydown = (e: KeyboardEvent) => {
			let keyCode = (e || <KeyboardEvent>event).keyCode;
			this.updateMoveStep(keyCode);
		};

		this.move();

		return Promise.resolve();
	}

	async stop() {
		return Promise.resolve();
	}



	private updateMoveStep(keyCode) {
		let newStep = KEYCODE_STEP_MAP[keyCode];

		const moveBack = this.moveStep &&
			(this.moveStep === -newStep);
		if (moveBack) {
			return;
		}

		this.moveStep = newStep || this.moveStep;
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
		this.draw(this.snakeHead, 'Lime');
	}

	private drawFood() {
		this.draw(this.food, 'Yellow');
	}

	private drawTailGround(tailGround) {
		this.draw(tailGround, 'Black');
	}

	private draw(cellIndex, color) {
		this.playGround
			.fillCell(cellIndex, color);
	}

	private setNextMove() {
		setTimeout(this.next, 130);
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
		return this.moveStep === 1 &&
			this.snakeHead % GROUND_COLUMNS === 0;
	}

	private isPopLeft() {
		return this.moveStep === -1 &&
			this.snakeHead % GROUND_COLUMNS === MAX_WIDTH_INDEX;
	}
}


export default Snake;