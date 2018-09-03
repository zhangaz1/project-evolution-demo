import Position from './../types/position.js';

export default interface Venue {
	isRushOut(position: Position): boolean;
	fixRushOut(position: Position): void;
}