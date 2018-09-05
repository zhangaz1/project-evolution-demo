import {
	Colors
} from './../enums/index.js';

import {
	ICoordinate,
	ISize
} from './index.js';

export { IRectangle };
export default interface IRectangle extends ICoordinate, ISize {
	borderSize: number;
	borderColor: Colors;
	fillColor: Colors;
}