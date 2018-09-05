import {
	IEngine,
	IEngineConfig,
	ISnake,
	ISnakeConfig,
	IFood,
	IFoods,
	IRender,
	IVenueConfig,
} from './../interfaces/index.js';

import {
	Venue,
	Foods,
	Snake,
	SnakeConfig,
} from './index.js';
import { EngineConfig } from './engineConfig.js';

export { Engine };
export default class Engine implements IEngine {
	private isPaused: boolean;
	private isStoped: boolean;
	private isStarted: boolean;

	private timer = 0;


	private snake: ISnake;
	private foods: IFoods<IFood>;


	constructor(
		private render: IRender,
		venueConfig: IVenueConfig,
		private engineConfig: IEngineConfig = new EngineConfig(),
	) {
		const venue = new Venue(venueConfig);
		this.snake = new Snake(venue);
		this.foods = new Foods(venue);
	}

	public async open() {
		this.renderVenue();
		this.renderFoods();
		this.renderSnake();
		this.renderScore();

		return Promise.resolve();
	}


	public async start() {
		if (!this.isStarted) {
			this.isStarted = true;
			this.run();
		}
	}

	public async pause() {
		this.isPaused = true;
	}

	public async continue() {
		this.isPaused = false;
		this.run();
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
		setTimeout(this.run.bind(this), this.engineConfig.interval);
	}

	private move() {
		const snake = this.snake;
		const oldTail = snake.tail;
		const food = snake.move(this.foods);

		if (this.snake.isDied) {
			console.log('game over');
			return;
		}

		if (food) {
			snake.score.increase(food);
			this.renderFoods();
			this.renderScore();
		}
		this.renderMovingSnake(snake.head, snake.neck, oldTail);
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

	private renderMovingSnake(head, neck, tail) {
		const render = this.render;
		render.renderSnakeHead(head);
		render.renderSnakeNeck(neck);
		render.revertSnakeTail(tail);
	}
}