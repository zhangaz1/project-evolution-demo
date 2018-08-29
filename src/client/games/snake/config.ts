import DefaultConfig from './defaultConfig.js';

export default class Config extends DefaultConfig {
	constructor(settings: undefined | null | object) {
		super();

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

	private _canvasWidth = null;
	public get canvasWidth() {
		if (!this._canvasWidth) {
			this._canvasWidth = this.cellWidth * this.groundRows;
		}
		return this._canvasWidth;
	}

	private _canvasHeight = null;
	public get canvasHeight() {
		if (!this._canvasHeight) {
			this._canvasHeight = this.cellHeight * this.groundRows;
		}
		return this._canvasHeight;
	}
}