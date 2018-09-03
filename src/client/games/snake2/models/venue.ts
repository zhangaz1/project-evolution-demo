import IVenue from './../interfaces/venue.js';

import VenueConfig from './venueConfig.js';
import Position from './../types/position.js';

export default class Venue implements IVenue {
	constructor(
		private venueConfig: VenueConfig = new VenueConfig()
	) { }

	public isRushOut(position: Position): boolean {
		return this.isRushOutLeft(position) ||
			this.isRushOutTop(position) ||
			this.isRushOutRight(position) ||
			this.isRushOutBottom(position);
	}

	public fixRushOut(position: Position): void {
		this.fixRushOutLeft(position) ||
			this.fixRushOutTop(position) ||
			this.fixRushOutRight(position) ||
			this.fixRushOutBottom(position);
	}


	private isRushOutLeft(position) {
		return position.x < 0;
	}

	private isRushOutTop(position) {
		return position.y < 0;
	}

	private isRushOutRight(position) {
		return position.x >= this.venueConfig.columns;
	}

	private isRushOutBottom(position) {
		return position.y >= this.venueConfig.rows;
	}



	private fixRushOutLeft(position) {
		if (this.isRushOutLeft(position)) {
			const columns = this.venueConfig.columns;
			position.x = position.x % columns + columns;
			return true;
		}
	}

	private fixRushOutTop(position) {
		if (this.isRushOutTop(position)) {
			const rows = this.venueConfig.rows;
			position.y = position.y % rows + rows;
			return true;
		}
	}

	private fixRushOutRight(position) {
		if (this.isRushOutRight(position)) {
			position.x = position.x % this.venueConfig.columns;
			return true;
		}
	}

	private fixRushOutBottom(position) {
		if (this.isRushOutBottom(position)) {
			position.y = position.y % this.venueConfig.rows;
			return true;
		}
	}
}