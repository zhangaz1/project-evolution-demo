import Colors from './../enums/colors.js';
import IRenderConfig from './../interfaces/renderConfig.js';
import VenueConfig from './venueConfig.js';

export default class RenderConfig implements IRenderConfig {
	public get width() {
		return this.venueConfig.columns * this.cellWidth;
	}

	public get height() {
		return this.venueConfig.rows * this.cellHeight;
	}

	public venueBorderSize: number = 2;

	public cellWidth: number = 20;
	public cellHeight: number = 20;

	public cellBorderSize: number = 1;

	public groundColor: Colors = Colors.Black;

	public snakeHeadColor: Colors = Colors.Red;
	public snakeBodyColor: Colors = Colors.Green;

	public foodColor: Colors = Colors.Blue;

	constructor(
		private venueConfig: VenueConfig = new VenueConfig()
	) { }
}