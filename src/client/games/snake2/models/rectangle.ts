import {
	IRectangle,
} from './../interfaces/index.js';

import {
	Colors,
} from './../enums/colors.js';

export { Rectangle };
export default class Rectangle implements IRectangle {
	public x: number;
	public y: number;

	public width: number;
	public height: number;

	public borderSize: number;
	public borderColor: Colors;
	public fillColor: Colors;

	constructor({
		x = 0,
		y = 0,
		width = 0,
		height = 0,
		borderSize = 0,
		borderColor = Colors.None,
		fillColor = Colors.None,
	}) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.borderSize = borderSize;
		this.borderColor = borderColor;
		this.fillColor = fillColor;
	}
}