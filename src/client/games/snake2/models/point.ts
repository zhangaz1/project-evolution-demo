import {
	IPoint,
} from './../interfaces/index.js';

import {
	IVector,
} from './../types/index.js';

export { Point };
export default class Point implements IPoint {
	constructor(
		public x: number = 0,
		public y: number = 0,
	) { }

	public copy(): IPoint {
		return Point.clone(this);
	}

	public move(step: IVector): IPoint {
		this.x += step.x;
		this.y += step.y;

		return this;
	}

	public getOpposite(): IPoint {
		const point = this.copy();
		point.x *= -1;
		point.y *= -1;
		return point;
	}

	public isEqual(anotherPoint: IPoint): boolean {
		return this.x === anotherPoint.x &&
			this.y === anotherPoint.y;
	}

	public isBasePoint(): boolean {
		return this.isEqual(Point.basePoint);
	}

	public isOpposite(anotherPoint: IPoint): boolean {
		return this.copy()
			.move(anotherPoint)
			.isBasePoint();
	}


	public static basePoint = new Point();

	public static clone(point: IPoint): IPoint {
		return new Point(point.x, point.y);
	}
}