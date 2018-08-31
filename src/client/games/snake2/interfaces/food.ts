import Colors from './../enums/colors.js';

import Point from './point.js';

export default interface Food {
	position: Point;
	color: Colors;
	power: number;
}