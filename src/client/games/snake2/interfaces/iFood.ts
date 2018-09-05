import {
	Colors
} from './../enums/index.js';

import {
	IPoint
} from './index.js';

export { IFood };
export default interface IFood {
	position: IPoint;
	color: Colors;
	power: number;
}