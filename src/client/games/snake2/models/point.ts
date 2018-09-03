import IPoint from './../interfaces/point.js';

export default class Point implements IPoint {
	constructor(
		public x: number = 0,
		public y: number = 0,
	) { }

	public copy() {
		return Point.clone(this);
	}

	public static clone(point: Point) {
		return new Point(point.x, point.y);
	}
}