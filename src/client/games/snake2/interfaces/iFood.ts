import Colors from '../enums/colors.js';

import IPoint from './iPoint.js';

export default interface IFood {
	position: IPoint;
	color: Colors;
	power: number;
}