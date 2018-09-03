import IPoint from './../interfaces/point.js';
import Vector from '../types/vector.js';

export default class Point implements IPoint {
	constructor(
		public x: number = 0,
		public y: number = 0,
	) { }

	public copy(): Point {
		return Point.clone(this);
	}

	public move(step: Vector): Point {
		this.x += step.x;
		this.y += step.y;

		return this;
	}

	public static clone(point: Point): Point {
		return new Point(point.x, point.y);
	}
}