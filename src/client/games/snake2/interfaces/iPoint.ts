import {
	IVector
} from '../types/index.js';

import {
	ICoordinate
} from './index';

export { IPoint };
export default interface IPoint extends ICoordinate {
	copy(): IPoint;
	move(step: IVector): IPoint;

	getOpposite(): IPoint;

	isEqual(anotherPoint: IPoint): boolean;
	isBasePoint(): boolean;
	isOpposite(antherPoint: IPoint): boolean;
}