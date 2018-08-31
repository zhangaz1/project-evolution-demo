import Colors from './../enums/colors.js';

export default interface DrawConfig {
	groundColor: Colors;

	cellWidth: number;
	cellHeight: number;

	snakeHeadColor: Colors;
	snakeBodyColor: Colors;

	foodColor: Colors;
}