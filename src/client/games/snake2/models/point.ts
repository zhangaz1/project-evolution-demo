import IPoint from '../interfaces/iPoint.js';
import Vector from '../types/vector.js';

export { Point };
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

	public getOpposite(): Point {
		const point = this.copy();
		point.x *= -1;
		point.y *= -1;
		return point;
	}

	public isEqual(anotherPoint: Point): boolean {
		return this.x === anotherPoint.x &&
			this.y === anotherPoint.y;
	}

	public isBasePoint(): boolean {
		return this.isEqual(Point.basePoint);
	}

	public isOpposite(anotherPoint: Point): boolean {
		return this.copy()
			.move(anotherPoint)
			.isBasePoint();
	}


	public static basePoint = new Point();

	public static clone(point: Point): Point {
		return new Point(point.x, point.y);
	}
}