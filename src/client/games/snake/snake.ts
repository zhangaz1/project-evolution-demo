// import * as $ from '@libs/jquery/dist/jquery.js';
// import * as a$ from './../../libs/jquery/dist/jquery.js';
// console.log(a$);
// import * as a$ from '@libs/jquery/dist/jquery.js';
// console.log('a$:', a$);

import Game from './../../core/models/game.js';

import Directions from './types/directions.js';
import Colors from './types/colors.js';
import Keys from './types/keys.js';
import Env from './types/env.js';

import Config from './config.js';

import PlayGround from './playGround.js';


/**
 * Snake游戏类
 *
 * 		start：开始游戏
 * 		close：关闭游戏
 */
export default class Snake implements Game {
	private /*readonly*/ canvas: Element;
	private /*readonly*/ playGround: PlayGround;

	private readonly config: Config;

	private readonly snake: number[];
	private food: number;
	private direction: number;
	private snakeHead: number;
	private next: Function;
	private timer: number;
	private isPaused: boolean;
	private isStoped: boolean;

	private readonly keyCodeDirectionMaps: Directions;
	private readonly maxColumnIndex: number;

	constructor(env: Env) {

		this.snake = [2, 1];
		this.food = 3;

		// this.snakeHead = this.snake[0];
		this.next = this.run.bind(this);
		this.timer = 0;
		this.isPaused = false;
		this.isStoped = false;

		this.config = new Config(env.settings);
		this.maxColumnIndex = this.config.groundColumns - 1;
		this.keyCodeDirectionMaps = {
			37: -1, 				// left
			38: -this.config.groundColumns, 	// top
			39: 1, 					// right
			40: this.config.groundColumns 		// down
		};
		this.direction = this.keyCodeDirectionMaps[Keys.Right];

		this.canvas = env.canvas;
		this.playGround = new PlayGround(this.canvas, this.config);
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
		this.canvas = null;
	}

	public async open() {
		document.onkeydown = (e: KeyboardEvent) => {
			let keyCode = (e || <KeyboardEvent>event).keyCode;
			this.updateMoveStep(keyCode);
		};
	}

	/**
	 *
	 */
	public async start() {
		this.init();
		this.run();
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
		this.run();
	}

	/**
	 *
	 */
	public async stop() {
		this.isStoped = true;
	}

	/**
	 *
	 */
	public async close() {
		this.destroy();
	}


	private updateMoveStep(keyCode) {
		let newDirection = this.keyCodeDirectionMaps[keyCode];

		if (this.isMoveBack(newDirection)) {
			return;
		}

		this.direction = newDirection || this.direction;
	}

	private isMoveBack(newDirection) {
		return this.direction &&
			(this.direction === -newDirection);
	}

	private init() {

	}

	private run() {
		if (this.isStoped || this.isPaused) {
			return;
		}

		this.unshiftNewHead();
		if (this.isGameOver()) {
			this.stop();
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
		return ~~(Math.random() * this.config.cells);
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
		return this.snakeHead >= this.config.cells;
	}

	private isPopRight() {
		return this.isMoveRight() &&
			this.isHeadToNextRowFirst();
	}

	private isHeadToNextRowFirst() {
		return this.snakeHead % this.config.groundColumns === 0;
	}

	private isMoveRight() {
		const right = this.keyCodeDirectionMaps[Keys.Right];
		return this.direction === right;
	}

	private isPopLeft() {
		return this.isMoveLeft() &&
			this.isHeadToPreviousRowLast();
	}

	private isHeadToPreviousRowLast() {
		return this.snakeHead % this.config.groundColumns === this.maxColumnIndex;
	}

	private isMoveLeft() {
		const left = this.keyCodeDirectionMaps[Keys.Left];
		return this.direction === left;
	}
}