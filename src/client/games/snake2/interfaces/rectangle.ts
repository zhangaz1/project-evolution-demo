import ICoordinate from './coordinate.js';
import ISize from './size.js';
import Colors from './../enums/colors.js';

export default interface Rectangle extends ICoordinate, ISize {
	borderSize: number;
	borderColor: Colors;
	fillColor: Colors;
}