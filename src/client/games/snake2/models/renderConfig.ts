import {
	Colors,
} from './../enums/index.js';

import {
	IVenueConfig,
	IRenderConfig,
} from './../interfaces/index.js';

import {
	VenueConfig,
} from './index.js';

export { RenderConfig };
export default class RenderConfig implements IRenderConfig {
	constructor(
		private venueConfig: IVenueConfig = new VenueConfig(),

		public venueBorderSize: number = 4,
		public venueBorderColor: Colors = Colors.Black,

		public cellWidth: number = 20,
		public cellHeight: number = 20,

		public cellBorderSize: number = 2,
		public cellBorderColor: Colors = Colors.Gray,

		public groundColor: Colors = Colors.White,

		public snakeHeadColor: Colors = Colors.Red,
		public snakeBodyColor: Colors = Colors.Green,

		public foodColor: Colors = Colors.Blue,
		public obstacleColor: Colors = Colors.Black,
	) { }

	public get width() {
		return this.venueConfig.columns * this.cellWidth;
	}

	public get height() {
		return this.venueConfig.rows * this.cellHeight;
	}

	public get canvasWidth() {
		return this.width + this.venueBorderSize;
	}

	public get canvasHeight() {
		return this.height + this.venueBorderSize;
	}
}