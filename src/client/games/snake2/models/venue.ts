import {
	randomInRange
} from './../utils/index.js';

import {
	GameModes,
} from './../enums/index.js';

import {
	IPosition, IObstacle, ICell,
} from './../types/index.js';

import {
	IVenue,
	IVenueConfig,
} from './../interfaces/index.js';

import {
	VenueConfig,
	Point,
} from './index.js';

export { Venue };
export default class Venue implements IVenue {
	private readonly _obstacles: IObstacle[] = [];

	public get columns(): number {
		return this.venueConfig.columns;
	}

	public get rows(): number {
		return this.venueConfig.rows;
	}

	public get obstacles(): IObstacle[] {
		return [].concat(this._obstacles); // copy
	}

	constructor(
		private venueConfig: IVenueConfig = new VenueConfig()
	) {
		if (this.venueConfig.gameMode === GameModes.Obstacles) {
			this.initObstacles(this.venueConfig.obstacles);
		}
	}

	private initObstacles(obstacles: number) {
		for (let i = 0; i < obstacles; i++) {
			this._obstacles.push(this.randomPosition()); // 避免重复？
		}
	}

	public randomPosition(): IPosition {
		return new Point(
			randomInRange(0, this.columns),
			randomInRange(0, this.rows),
		);
	}

	public ensurePosition(position: IPosition): IPosition {
		const isRushOut = this.isRushOut(position);
		if (isRushOut) {
			switch (this.venueConfig.gameMode) {
				case GameModes.Classic:
					return null;

				case GameModes.Obstacles:
				case GameModes.NoWalls:
					this.fixRushOut(position)
					return position;

				default:
					return null;
			}
		}

		if (this.venueConfig.gameMode === GameModes.Obstacles) {
			if (this.isObstacle(position)) {
				return null;
			}
		}

		return position;
	}

	private isObstacle(cell: ICell) {
		return !!this.findObstacle(cell);
	}

	private findObstacle(position: IPosition): IObstacle {
		return this._obstacles.find(
			obstacle => obstacle.isEqual(position)
		);
	}

	private isRushOut(position: IPosition): boolean {
		return this.isRushOutLeft(position) ||
			this.isRushOutTop(position) ||
			this.isRushOutRight(position) ||
			this.isRushOutBottom(position);
	}

	private fixRushOut(position: IPosition): void {
		this.fixRushOutLeft(position) ||
			this.fixRushOutTop(position) ||
			this.fixRushOutRight(position) ||
			this.fixRushOutBottom(position);
	}


	private isRushOutLeft(position): boolean {
		return position.x < 0;
	}

	private isRushOutTop(position): boolean {
		return position.y < 0;
	}

	private isRushOutRight(position): boolean {
		return position.x >= this.venueConfig.columns;
	}

	private isRushOutBottom(position): boolean {
		return position.y >= this.venueConfig.rows;
	}

	private fixRushOutLeft(position): boolean {
		if (this.isRushOutLeft(position)) {
			const columns = this.venueConfig.columns;
			position.x = position.x % columns + columns;
			return true;
		}
		return false;
	}

	private fixRushOutTop(position): boolean {
		if (this.isRushOutTop(position)) {
			const rows = this.venueConfig.rows;
			position.y = position.y % rows + rows;
			return true;
		}
		return false;
	}

	private fixRushOutRight(position): boolean {
		if (this.isRushOutRight(position)) {
			position.x = position.x % this.venueConfig.columns;
			return true;
		}
		return false;
	}

	private fixRushOutBottom(position): boolean {
		if (this.isRushOutBottom(position)) {
			position.y = position.y % this.venueConfig.rows;
			return true;
		}
		return false;
	}
}