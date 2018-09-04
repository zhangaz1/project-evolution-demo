import IEngine from './../interfaces/engine.js';
import Snake from './snake.js';
import Foods from './foods.js';
import IRender from './../interfaces/render.js';

export { Engine };
export default class Engine implements IEngine {
	private isPaused: boolean;
	private isStoped: boolean;

	private timer = 0;

	constructor(
		private snake: Snake,
		private foods: Foods,
		private render: IRender,
	) { }

	public async open() {
		this.renderVenue();
		this.renderFoods();
		this.renderSnake();
		this.renderScore();

		return Promise.resolve();
	}


	public async start() {
		if (this.timer === 0) {
			this.timer = setInterval(this.run.bind(this), 100);
		}
	}

	public async pause() {
		this.isPaused = true;
	}

	public async continue() {
		this.isPaused = false;
	}

	public async stop() {
		clearInterval(this.timer);
		this.timer = 0;
		this.isStoped = true;
	}

	public async close() {
		this.destroy();
	}


	private run() {
		if (this.isStoped || this.isPaused) {
			return;
		}

		this.move();
		setTimeout(this.run.bind(this), 100);
	}

	private move() {
		const food = this.snake.move(this.foods);
		if (food) {
			this.snake.score.increase(food);
			this.renderFoods();
			this.renderScore();
		}
		this.renderSnake();
	}

	private destroy() { }

	private renderScore() {
		this.render.renderScore(this.snake.score);
	}

	private renderSnake() {
		this.render.renderSnake(this.snake);
	}

	private renderFoods() {
		this.render.renderFoods(this.foods);
	}

	private renderVenue() {
		this.render.renderVenue();
	}
}