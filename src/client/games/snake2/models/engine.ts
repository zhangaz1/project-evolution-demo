import IEngine from './../interfaces/engine.js';
import Snake from './snake.js';
import Foods from './foods.js';
import IRender from './../interfaces/render.js';

export { Engine };
export default class Engine implements IEngine {
	constructor(
		private snake: Snake,
		private foods: Foods,
		private render: IRender,
	) { }

	public open(): Promise<any> {
		this.render.renderVenue();
		this.render.renderFoods(this.foods);
		this.render.renderSnake(this.snake);
		this.render.renderScore(this.snake.score);
		return Promise.resolve();
	}

	public start(): Promise<any> {
		return Promise.resolve();
	}

	public pause(): Promise<any> {
		return Promise.resolve();
	}

	public continue(): Promise<any> {
		return Promise.resolve();
	}

	public stop(): Promise<any> {
		return Promise.resolve();
	}

	public close(): Promise<any> {
		return Promise.resolve();
	}

}