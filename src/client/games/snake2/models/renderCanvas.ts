import IRender from './../interfaces/render.js';

import Foods from './foods.js';
import Food from './food.js';
import Snake from './snake.js';
import Score from './score.js';
import RenderConfig from './renderConfig.js';

export default class RenderCanvas implements IRender {
	private readonly context: CanvasRenderingContext2D;

	constructor(
		private canvasElement: HTMLCanvasElement,
		private renderConfig: RenderConfig,
	) {
		this.context = canvasElement.getContext('2d');
	}

	public renderVenue(): void {

	}

	public renderFoods(foods: Foods): void { }

	public renderSnake(snake: Snake): void { }

	public renderScore(score: Score): void { }


	private renderCell() { }
}