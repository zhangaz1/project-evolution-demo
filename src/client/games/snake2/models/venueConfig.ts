import {
	GameModes,
} from './../enums/index.js';

import {
	IVenueConfig,
} from './../interfaces/index.js';

export { VenueConfig };
export default class VenueConfig implements IVenueConfig {
	constructor(
		public columns: number = 20,
		public rows: number = 30,
		public gameMode: GameModes = GameModes.NoWalls,
	) { }
}