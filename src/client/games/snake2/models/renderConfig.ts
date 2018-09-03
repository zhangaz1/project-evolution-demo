import Colors from './../enums/colors.js';
import IRenderConfig from './../interfaces/renderConfig.js';

export default class RenderConfig implements IRenderConfig {
	public groundColor: Colors = Colors.Black;

	public cellWidth: number = 20;
	public cellHeight: number = 20;

	public snakeHeadColor: Colors = Colors.Red;
	public snakeBodyColor: Colors = Colors.Green;

	public foodColor: Colors = Colors.Blue;

	constructor() { }
}