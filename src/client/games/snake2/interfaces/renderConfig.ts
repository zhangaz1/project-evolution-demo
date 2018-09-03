import Colors from './../enums/colors.js';

export default interface RenderConfig {
	readonly width: number;
	readonly height: number;

	venueBorderSize: number;

	cellWidth: number;
	cellHeight: number;

	cellBorderSize: number;

	groundColor: Colors;

	snakeHeadColor: Colors;
	snakeBodyColor: Colors;

	foodColor: Colors;
}