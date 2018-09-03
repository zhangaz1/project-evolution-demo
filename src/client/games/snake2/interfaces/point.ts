import Vector from './../types/vector.js';

export default interface Point {
	x: number;
	y: number;

	copy(): Point;
	move(step: Vector): Point;

	isEqual(anotherPoint: Point): boolean;
	isBasePoint():boolean;
	isOpposite(antherPoint: Point): boolean;
}