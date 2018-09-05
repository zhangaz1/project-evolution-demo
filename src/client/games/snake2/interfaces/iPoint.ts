import ICoordinate from './iCoordinate.js';
import Vector from '../types/vector.js';

export default interface IPoint extends ICoordinate {
	copy(): IPoint;
	move(step: Vector): IPoint;

	getOpposite(): IPoint;

	isEqual(anotherPoint: IPoint): boolean;
	isBasePoint(): boolean;
	isOpposite(antherPoint: IPoint): boolean;
}