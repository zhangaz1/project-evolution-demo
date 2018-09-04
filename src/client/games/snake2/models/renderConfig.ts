import Colors from './../enums/colors.js';
import IRenderConfig from './../interfaces/renderConfig.js';
import VenueConfig from './venueConfig.js';

export { RenderConfig };
export default class RenderConfig implements IRenderConfig {
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

	public venueBorderSize: number = 4;
	public venueBorderColor: Colors = Colors.Blue;

	public cellWidth: number = 20;
	public cellHeight: number = 20;

	public cellBorderSize: number = 2;
	public cellBorderColor: Colors = Colors.Red;

	public groundColor: Colors = Colors.Gray;

	public snakeHeadColor: Colors = Colors.Red;
	public snakeBodyColor: Colors = Colors.Green;

	public foodColor: Colors = Colors.Blue;

	constructor(
		private venueConfig: VenueConfig = new VenueConfig()
	) { }
}