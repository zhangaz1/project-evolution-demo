import {
	KeyCode,
} from './../types/index.js';

import {
	keyDirectionMap,
} from './../constants/index.js';

import {
	ISnake,
	IEngine,
	IActionHandler,
} from './../interfaces/index.js';

export { ActionHandler };
export default class ActionHandler implements IActionHandler {
	constructor(
		private snake: ISnake,
		private engine: IEngine,
	) { }

	public doAction(keyCode: KeyCode): void {
		console.log('action:', keyCode);
		const direction = keyDirectionMap[keyCode];
		if (direction) {
			this.snake.turn(direction);
			return;
		}

		switch (keyCode) {
			case 32:
				this.engine.pauseToggle();
				break;
			default:
				break;
		}
	}
}