import Colors from './../enums/colors.js';

import IPoint from './point.js';

export default interface Food {
	position: IPoint;
	color: Colors;
	power: number;
}