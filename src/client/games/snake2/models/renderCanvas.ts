import {
	Colors,
} from './../enums/index.js';

import {
	Cell,
} from './../types/index.js';

import {
	IFood,
	IFoods,
	ISnake,
	IScore,
	IRectangle,
	IRender,
	IRenderConfig,
} from './../interfaces/index.js';

import {
	Snake,
	Rectangle,
} from './index.js';


class CellParamsObj {
	constructor(
		public cell: Cell,
		public fillColor: Colors = null,
		public borderSize: number = null,
		public borderColor: Colors = null,
	) { }
}

export { RenderCanvas };
export default class RenderCanvas implements IRender {
	private readonly context: CanvasRenderingContext2D;

	constructor(
		private canvasElement: HTMLCanvasElement,
		private renderConfig: IRenderConfig,
	) {
		this.context = canvasElement.getContext('2d');
	}

	public renderVenue(): void {
		const rectangle = this.getVenueRectangle();
		this.drawRectangle(rectangle);
	}

	public renderFoods(foods: IFoods<IFood>): void {
		foods.foods.forEach(
			this.renderFood.bind(this)
		);
	}

	private renderFood(food) {
		this.renderCell(
			new CellParamsObj(
				food.position,
				food.color,
			)
		)
	}

	public renderSnake(snake: ISnake): void {
		this.renderSnakeHead(snake.head);

		snake.body.forEach(
			this.renderBodyCell.bind(this)
		);
	}

	private renderBodyCell(bodyCell: Cell) {
		this.renderCell(
			new CellParamsObj(
				bodyCell,
				this.renderConfig.snakeBodyColor,
			)
		);
	}

	public renderScore(score: IScore): void {
		console.log(JSON.stringify(score, null, 4));
	}

	public renderSnakeHead(head: Cell): void {
		this.renderCell(new CellParamsObj(
			head,
			this.renderConfig.snakeHeadColor,
		));
	}

	public renderSnakeNeck(neck: Cell): void {
		this.renderBodyCell(neck);
	}

	public revertSnakeTail(tail: Cell): void {
		this.renderCell(new CellParamsObj(
			tail,
			this.renderConfig.groundColor,
			0,
		));
	}


	private getVenueRectangle() {
		const config = this.renderConfig;
		const venueBorderSize = config.venueBorderSize;

		return new Rectangle({
			x: venueBorderSize / 2,
			y: venueBorderSize / 2,
			width: config.width,
			height: config.height,
			borderSize: venueBorderSize,
			borderColor: config.venueBorderColor,
			fillColor: config.groundColor,
		});
	}

	private renderCell(cellParamsObj: CellParamsObj): void {
		const rectangle = this.getCellRectangle(cellParamsObj);
		this.drawRectangle(rectangle);
	}

	private getCellRectangle(cellParamsObj: CellParamsObj): IRectangle {
		const config = this.renderConfig;
		const venueBorderSize = config.venueBorderSize;
		const borderSize = cellParamsObj.borderSize !== null ? cellParamsObj.borderSize : config.cellBorderSize;
		const borderColor = cellParamsObj.borderColor !== null ? cellParamsObj.borderColor : config.cellBorderColor;
		const cellWidth = config.cellWidth;
		const cellHeight = config.cellHeight;
		const cell = cellParamsObj.cell;

		return new Rectangle({
			x: cell.x * cellWidth + borderSize / 2 + venueBorderSize / 2,
			y: cell.y * cellHeight + borderSize / 2 + venueBorderSize / 2,
			width: cellWidth - borderSize,
			height: cellHeight - borderSize,
			fillColor: cellParamsObj.fillColor,
			borderSize,
			borderColor,
		});
	}


	private drawRectangle(rectangle: IRectangle) {
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