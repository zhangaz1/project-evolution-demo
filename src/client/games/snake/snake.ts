import Game from './../../core/models/game.js';

import Directions from './types/directions.js';
import Colors from './types/colors.js';
import Keys from './types/keys.js';


import {
	GROUND_COLUMNS,
} from './config.js';

import {
	PlayGround,
	CELLS,
	CELLS_MAX_LENGTH,
} from './playGround.js';


const KEYCODE_DIRECTION_MAP: Directions = {
	37: -1, 				// left
	38: -GROUND_COLUMNS, 	// top
	39: 1, 					// right
	40: GROUND_COLUMNS 		// down
};
const MAX_WIDTH_INDEX = GROUND_COLUMNS - 1;


/**
 * Snake游戏类
 *
 * 		start：开始游戏
 * 		close：关闭游戏
 */
class Snake implements Game {
	private playGround: PlayGround;

	private snake: number[];
	private food: number;
	private direction: number;
	private snakeHead: number;
	private next: Function;
	private timer: number;
	private isPaused: boolean;
	private isStoped: boolean;

	constructor(private canvas: Element) {
		this.snake = [2, 1];
		this.food = 3;
		this.direction = KEYCODE_DIRECTION_MAP[Keys.Right];
		// this.snakeHead = this.snake[0];
		this.next = this.move.bind(this);
		this.timer = 0;
		this.isPaused = false;
		this.isStoped = false;

		this.playGround = new PlayGround(canvas);
	}

	/**
	 * 资源清理
	 */
	public destroy() {
		document.onkeydown = null;
		if (this.timer) {
			clearTimeout(this.timer);
		}

		this.playGround.destroy();
		this.playGround = null;

		$(this.canvas).remove();
		// this.canvas = null;
	}

	public async open() {
		document.onkeydown = (e: KeyboardEvent) => {
			let keyCode = (e || <KeyboardEvent>event).keyCode;
			this.updateMoveStep(keyCode);
		};

		return Promise.resolve();
	}

	/**
	 *
	 */
	public async start() {
		this.move();
	}

	/**
	 *
	 */
	public async pause() {
		this.isPaused = true;
	}

	/**
	 *
	 */
	public async continue() {
		this.isPaused = false;
		this.start();
	}

	/**
	 *
	 */
	public async stop() {
		this.isStop = true;
	}

	/**
	 *
	 */
	public async close() {
		this.destroy();
		return Promise.resolve();
	}



	private updateMoveStep(keyCode) {
		let newDirection = KEYCODE_DIRECTION_MAP[keyCode];

		if (this.isMoveBack(newDirection)) {
			return;
		}

		this.direction = newDirection || this.direction;
	}

	private isMoveBack(newDirection) {
		return this.direction &&
			(this.direction === -newDirection);
	}

	private move() {
		if (this.isStoped || this.isPaused) {
			return;
		}

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
		this.snakeHead = this.snake[0] + this.direction;
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
		const right = KEYCODE_DIRECTION_MAP[Keys.Right];
		return this.direction === right;
	}

	private isPopLeft() {
		return this.isMoveLeft() &&
			this.isHeadToPreviousRowLast();
	}

	private isHeadToPreviousRowLast() {
		return this.snakeHead % GROUND_COLUMNS === MAX_WIDTH_INDEX;
	}

	private isMoveLeft() {
		const left = KEYCODE_DIRECTION_MAP[Keys.Left];
		return this.direction === left;
	}
}


export default Snake;