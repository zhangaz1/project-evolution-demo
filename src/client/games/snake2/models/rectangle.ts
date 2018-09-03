import IRectangle from './../interfaces/rectangle.js';
import Colors from './../enums/colors.js';

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
		borderColor = Colors.White,
		fillColor = Colors.Black,
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