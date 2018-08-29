import Config from './config.js';


/**
 * 游戏画布辅助类：
 *
 * 		fillCell()：可以绘制指定cell为指定颜色
 */
export default class PlayGround {
	private context: Canvas2DContextAttributes;

	constructor(canvas, private config: Config) {
		this.context = canvas.getContext('2d');
	}

	public destroy() {
		this.context = null;
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
			this.config.cellContentWidth,
			this.config.cellContentHeight
		);
	}


	protected getCellX(cellIndex: number): number {
		let column = cellIndex % this.config.groundColumns;
		return column * this.config.cellWidth + this.config.cellBorderWidth;
	}

	protected getCellY(cellIndex: number): number {
		let row = ~~(cellIndex / this.config.groundColumns);
		return row * this.config.cellHeight + this.config.cellBorderWidth;
	}
}
