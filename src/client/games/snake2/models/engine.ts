import {
	KeyCode,
} from './../types/index.js';

import {
	IEngine,
	IEngineConfig,
	ISnake,
	ISnakeConfig,
	IFood,
	IFoods,
	IFoodsConfig,
	IRender,
	IVenueConfig,
	IActionHandler,
} from './../interfaces/index.js';

import {
	Venue,
	Foods,
	FoodsConfig,
	Snake,
	SnakeConfig,
	EngineConfig,
	ActionHandler,
} from './index.js';

export { Engine };
export default class Engine implements IEngine {
	private isPaused: boolean;
	private isStoped: boolean;
	private isStarted: boolean;

	private timer = 0;

	private snake: ISnake;
	private foods: IFoods<IFood>;
	private actionHandler: IActionHandler;

	constructor(
		private render: IRender,
		venueConfig: IVenueConfig,
		private engineConfig: IEngineConfig = new EngineConfig(),
		snakeConfig: ISnakeConfig = new SnakeConfig(),
		foodsConfig: IFoodsConfig = new FoodsConfig(),
	) {
		const venue = new Venue(venueConfig);
		this.snake = new Snake(venue, snakeConfig);
		this.foods = new Foods(venue, foodsConfig);
		this.actionHandler = new ActionHandler(this.snake, <IEngine>this);
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

	public pauseToggle(): void {
		this.isPaused = !this.isPaused;
		if (!this.isPaused) {
			this.continue();
		}
	}

	public inputKey(keyCode: KeyCode): void {
		this.actionHandler.doAction(keyCode);
	}

	private run() {
		if (this.canRun()) {
			this.move();
			this.setNext();
		}
	}

	private setNext() {
		setTimeout(
			this.run.bind(this),
			this.engineConfig.interval
		);
	}

	private canRun(): boolean {
		return this.isStarted &&
			!this.isPaused &&
			!this.isStoped &&
			!this.snake.isDied;
	}

	private move() {
		const snake = this.snake;
		const oldTail = snake.tail;
		const food = snake.move(this.foods);

		if (this.snake.isDied) {
			console.log('game over');
			console.log('your score:', this.snake.score);
			return;
		}

		if (food) {
			snake.score.increase(food);
			this.renderFoods();
			this.renderScore();
		}
		this.renderMovingSnake(snake.head, snake.neck, oldTail);
	}

	public destroy() {

	}

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