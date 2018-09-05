import ICoordinate from './iCoordinate.js';
import ISize from './iSize.js';
import Colors from '../enums/colors.js';

export default interface IRectangle extends ICoordinate, ISize {
	borderSize: number;
	borderColor: Colors;
	fillColor: Colors;
}