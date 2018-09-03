import ICoordinate from './coordinate.js';
import Vector from './../types/vector.js';

export default interface Point extends ICoordinate {
	copy(): Point;
	move(step: Vector): Point;

	getOpposite(): Point;

	isEqual(anotherPoint: Point): boolean;
	isBasePoint(): boolean;
	isOpposite(antherPoint: Point): boolean;
}