import Position from '../types/position.js';

export default interface IVenue {
	readonly columns: number;
	readonly rows: number;

	randomPosition(): Position;

	isRushOut(position: Position): boolean;
	fixRushOut(position: Position): void;
}