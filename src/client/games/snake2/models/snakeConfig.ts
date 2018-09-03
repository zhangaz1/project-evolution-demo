import Vector from './../types/vector.js';

import ISnakeConfig from './../interfaces/snakeConfig.js';

import VenueConfig from './venueConfig.js';
import Point from './point.js';

export default class SnakeConfig implements ISnakeConfig {
	public defaultLength: number = 3;
	public defaultStep: Vector = new Point(1, 0);

	constructor(
		public venueConfig: VenueConfig = new VenueConfig()
	) { }
}