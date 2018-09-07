import {
	Colors
} from './../enums/index.js';

export { IRenderConfig };
export default interface IRenderConfig {
	readonly width: number;
	readonly height: number;

	readonly canvasWidth: number;
	readonly canvasHeight: number;

	venueBorderSize: number;
	venueBorderColor: Colors;

	cellWidth: number;
	cellHeight: number;

	cellBorderSize: number;
	cellBorderColor: Colors;

	groundColor: Colors;

	snakeHeadColor: Colors;
	snakeBodyColor: Colors;

	foodColor: Colors;
	obstacleColor: Colors;
}