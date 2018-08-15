import Game from './../../core/models/game.js';

import Directions from './types/directions.js';

import {
	GROUND_COLUMNS,
	GROUND_ROWS,
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

	constructor(canvas) {
		this.playGround = new PlayGround(canvas);
	}

	async start() {
		const playGround = this.playGround;

		const snake: Array<number> = [42, 41];

		let food: number = 43,
			moveStep: number = 1,
			snakeHead: number;

		document.onkeydown = function (e: KeyboardEvent) {
			let keyCode = (e || <KeyboardEvent>event).keyCode;
			updateMoveStep(keyCode);
		};

		move();

		return Promise.resolve();

		// return void (0);

		function updateMoveStep(keyCode) {
			let newStep = KEYCODE_STEP_MAP[keyCode];

			const moveBack = moveStep &&
				(moveStep === -newStep);
			if (moveBack) {
				return;
			}

			moveStep = newStep || moveStep;
		}

		function move() {
			unshiftNewHead();
			if (isGameOver()) {
				return console.log("GAME OVER");
			}
			drawHead();
			if (isEatFood()) {
				randomNewFood();
				drawFood();
			} else {
				let tailGround = snake.pop();
				drawTailGround(tailGround);
			}
			setNextMove();
		}

		function drawHead() {
			draw(snakeHead, 'Lime');
		}

		function drawFood() {
			draw(food, 'Yellow');
		}

		function drawTailGround(tailGround) {
			draw(tailGround, 'Black');
		}

		function draw(cellIndex, color) {
			playGround.fillCell(cellIndex, color);
		}

		function setNextMove() {
			setTimeout(move, 130);
		}

		function isEatFood() {
			return snakeHead === food;
		}

		function unshiftNewHead() {
			snakeHead = snake[0] + moveStep;
			snake.unshift(snakeHead);
		}

		function randomNewFood() {
			do {
				food = randomPosition();
			} while (isFoodOnSelf());
		}

		function isFoodOnSelf() {
			return snake.indexOf(food) >= 0;
		}

		function randomPosition() {
			return ~~(Math.random() * CELLS);
		}

		function isGameOver() {
			return isPopSelf() ||
				isPopTop() ||
				isPopBottom() ||
				isPopRight() ||
				isPopLeft();
		}

		function isPopSelf() {
			return snake.indexOf(snakeHead, 1) > 0;
		}

		function isPopTop() {
			return snakeHead < 0;
		}

		function isPopBottom() {
			return snakeHead > CELLS_MAX_LENGTH;
		}

		function isPopRight() {
			return moveStep === 1 &&
				snakeHead % GROUND_COLUMNS === 0;
		}

		function isPopLeft() {
			return moveStep === -1 &&
				snakeHead % GROUND_COLUMNS === MAX_WIDTH_INDEX;
		}

	}

	async stop() {
		return Promise.resolve();
	}
}


export default Snake;