function snake(canvas) {
	const WIDTH: number = 20;
	const MAX_WIDTH_INDEX = WIDTH - 1;
	const HEIGHT = 20;
	const POSITION_WIDTH = 20;
	const POSITION_HEIGHT = 20;
	const POSITIONS_LENGTH = WIDTH * HEIGHT;
	const MAX_POSITIONS_INDEX = POSITIONS_LENGTH - 1;

	const KEYCODE_STEP_MAP = {
		'37': -1, // left
		'38': -WIDTH, // top
		'39': 1, // right
		'40': WIDTH // down
	};

	const snake: Array<number> = [42, 41];
	const ctx = canvas.getContext("2d");

	let food: number = 43,
		moveStep: number = 1,
		snakeHead: number;

	document.onkeydown = function (e: KeyboardEvent) {
		let keyCode = (e || <KeyboardEvent>event).keyCode;
		updateMoveStep(keyCode);
	};

	move();

	return void (0);

	function updateMoveStep(keyCode) {
		let newStep = KEYCODE_STEP_MAP[keyCode];

		const moveBack = moveStep &&
			(moveStep === -newStep);
		if (moveBack) {
			return;
		}

		moveStep = newStep || moveStep;
	}

	function draw(positionIndex, c) {
		ctx.fillStyle = c;
		let x = getPositionX(positionIndex);
		let y = getPositionY(positionIndex);
		ctx.fillRect(x, y, 18, 18);
	}

	function getPositionX(positionIndex) {
		let column = positionIndex % WIDTH;
		return column * POSITION_WIDTH + 1;
	}

	function getPositionY(positionIndex) {
		let row = ~~(positionIndex / WIDTH);
		return row * POSITION_HEIGHT + 1;
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
		draw(snakeHead, "Lime");
	}

	function drawFood() {
		draw(food, "Yellow");
	}

	function drawTailGround(tailGround) {
		draw(tailGround, "Black");
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
		return ~~(Math.random() * POSITIONS_LENGTH);
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
		return snakeHead > MAX_POSITIONS_INDEX;
	}

	function isPopRight() {
		return moveStep === 1 &&
			snakeHead % WIDTH === 0;
	}

	function isPopLeft() {
		return moveStep === -1 &&
			snakeHead % WIDTH === MAX_WIDTH_INDEX;
	}
}

export {
	snake as default
};