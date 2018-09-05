import {
	Position,
} from './../types/index.js';

export { IVenue };
export default interface IVenue {
	readonly columns: number;
	readonly rows: number;

	randomPosition(): Position;

	isRushOut(position: Position): boolean;
	fixRushOut(position: Position): void;
}