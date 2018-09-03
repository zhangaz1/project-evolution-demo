import Colors from './../enums/colors.js';

export default interface RenderConfig {
	groundColor: Colors;

	cellWidth: number;
	cellHeight: number;

	snakeHeadColor: Colors;
	snakeBodyColor: Colors;

	foodColor: Colors;
}