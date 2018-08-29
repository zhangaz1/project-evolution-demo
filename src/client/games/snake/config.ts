const baseSize = 20;

// 游戏区单元格宽度和高度
const cellWidth = baseSize;
const cellHeight = baseSize;

// 游戏区行列数
const groundColumns = baseSize;
const groundRows = baseSize;

const cellBorderWidth = 1; // px

export {
	cellWidth as CELL_WIDTH,
	cellHeight as CELL_HEIGHT,

	groundColumns as GROUND_COLUMNS,
	groundRows as GROUND_ROWS,

	cellBorderWidth as CELL_BORDER_WIDTH,
};

export default class Config {
	public readonly cellWidth = baseSize;
	public readonly cellHeight = baseSize;

	public readonly groundColumns = baseSize;
	public readonly groundRows = baseSize;

	public readonly cellBorderWidth = cellBorderWidth;

	constructor(settings: null | undefined)
	constructor(settings: object) {
		if (settings) {
			Object.assign(this, settings);
		}
	}

	private _cellContentWidth = null;
	public get cellContentWidth() {
		if (!this._cellContentWidth) {
			this._cellContentWidth = this.cellWidth - this.cellBorderWidth * 2;
		}
		return this._cellContentWidth;
	}

	private _cellContentHeight = null;
	public get cellContentHeight() {
		if (!this._cellContentHeight) {
			this._cellContentHeight = this.cellHeight - this.cellBorderWidth * 2;
		}
		return this._cellContentHeight;
	}

	private _cells = null;
	public get cells() {
		if (!this._cells) {
			this._cells = this.groundColumns * this.groundRows;
		}
		return this._cells;
	}
}