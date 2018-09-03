import IRender from './../interfaces/render.js';

import Colors from '../enums/colors.js';

import Cell from './../types/cell.js';

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


	private renderCell(cell: Cell, color: Colors) {
		const config = this.renderConfig;
		const borderSize = config.cellBorderSize;
		const cellWidth = config.cellWidth;
		const cellHeight = config.cellHeight;

		const x = cell.x * cellWidth + borderSize;
		const y = cell.y * cellHeight + borderSize;

		const width = cellWidth - borderSize * 2;
		const height = cellHeight - borderSize * 2;

		this.renderRectangle(x, y, width, height, color);
	}

	private renderRectangle(x, y, width, height, color) {
		this.context.fillStyle = color;
		this.context.fillRect(x, y, width, height);
	}
}