import IRender from './../interfaces/render.js';

import Colors from './../enums/colors.js';

import Cell from './../types/cell.js';

import Foods from './foods.js';
import Food from './food.js';
import Snake from './snake.js';
import Score from './score.js';
import Rectangle from './rectangle.js';
import RenderConfig from './renderConfig.js';

class CellParamsObj {
	cell: Cell;
	fillColor?: Colors = null;
	borderSize?: number = null;
	borderColor?: Colors = null;
}

export { RenderCanvas };
export default class RenderCanvas implements IRender {
	private readonly context: CanvasRenderingContext2D;

	constructor(
		private canvasElement: HTMLCanvasElement,
		private renderConfig: RenderConfig,
	) {
		this.context = canvasElement.getContext('2d');
	}

	public renderVenue(): void {
		const rectangle = this.getVenueRectangle();
		this.drawRectangle(rectangle);
	}

	public renderFoods(foods: Foods): void {
		foods.foods
			.forEach(food => this.renderCell({
				cell: food.position,
				fillColor: food.color,
			}));
	}

	public renderSnake(snake: Snake): void {
		this.renderCell({
			cell: snake.head,
			fillColor: this.renderConfig.snakeHeadColor,
		});

		snake.body.forEach(cell => this.renderCell({
			cell,
			fillColor: this.renderConfig.snakeBodyColor,
		}));
	}

	public renderScore(score: Score): void {
		console.log(JSON.stringify(score, null, 4));
	}

	private getVenueRectangle() {
		const config = this.renderConfig;
		const venueBorderSize = config.venueBorderSize;

		return new Rectangle({
			width: config.width * venueBorderSize * 2,
			height: config.height + venueBorderSize * 2,
			borderSize: venueBorderSize,
			borderColor: config.venueBorderColor,
			fillColor: config.groundColor,
		});
	}

	private renderCell(cellParamsObj: CellParamsObj): void {
		const rectangle = this.getCellRectangle(cellParamsObj);
		this.drawRectangle(rectangle);
	}

	private getCellRectangle(cellParamsObj: CellParamsObj): Rectangle {
		const config = this.renderConfig;
		const borderSize = cellParamsObj.borderSize !== null ? cellParamsObj.borderSize : config.cellBorderSize;
		const cellWidth = config.cellWidth;
		const cellHeight = config.cellHeight;
		const cell = cellParamsObj.cell;

		return new Rectangle({
			x: cell.x * cellWidth + borderSize,
			y: cell.y * cellHeight + borderSize,
			width: cellWidth - borderSize * 2,
			height: cellHeight - borderSize * 2,
			fillColor: cellParamsObj.fillColor,
			borderSize,
			borderColor: cellParamsObj.borderColor,
		});
	}

	private drawRectangle(rectangle: Rectangle) {
		const context = this.context;
		context.beginPath();
		context.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);

		if (rectangle.borderSize) {
			context.lineWidth = rectangle.borderSize;
			context.strokeStyle = rectangle.borderColor;
			context.stroke();
		}

		if (rectangle.fillColor !== Colors.None) {
			context.fillStyle = rectangle.fillColor;
			context.fill();
		}
	}

}