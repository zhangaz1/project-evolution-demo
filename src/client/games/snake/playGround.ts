import {
	CELL_WIDTH,
	CELL_HEIGHT,

	GROUND_COLUMNS,
	GROUND_ROWS,
} from './config.js';

// 游戏区总单元格数据
const CELLS = GROUND_COLUMNS * GROUND_ROWS;
const CELLS_MAX_LENGTH = CELLS - 1;

// cell border and content width height
const CELL_BORDER_SIZE = 1;
const CELL_CONTENT_WIDTH = CELL_WIDTH - CELL_BORDER_SIZE * 2;
const CELL_CONTENT_HEIGHT = CELL_HEIGHT - CELL_BORDER_SIZE * 2;


/**
 * 游戏画布辅助类：
 *
 * 		fillCell()：可以绘制指定cell为指定颜色
 */
export default class PlayGround {
	private context: Canvas2DContextAttributes;

	constructor(canvas) {
		this.context = canvas.getContext('2d');
	}

	/**
	 * 用指定颜色填充指定索引位置的cell
	 * @param cellIndex : 要填充的cell的索引
	 * @param color : 要填充的颜色
	 */
	public fillCell(cellIndex: number, color: string): void {
		this.context.fillStyle = color;
		const x = this.getCellX(cellIndex);
		const y = this.getCellY(cellIndex);
		(<any>this.context.fillRect)( // function ???
			x,
			y,
			CELL_CONTENT_WIDTH,
			CELL_CONTENT_HEIGHT
		);
	}


	protected getCellX(cellIndex: number): number {
		let column = cellIndex % GROUND_COLUMNS;
		return column * CELL_WIDTH + CELL_BORDER_SIZE;
	}

	protected getCellY(cellIndex: number): number {
		let row = ~~(cellIndex / GROUND_COLUMNS);
		return row * CELL_HEIGHT + CELL_BORDER_SIZE;
	}
}