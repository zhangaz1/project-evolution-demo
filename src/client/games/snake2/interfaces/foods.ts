import IPoint from './point.js';
import IFood from './food.js';

export default interface Foods<T extends IFood> {
	readonly foods: IFood[];
	eat(position: IPoint): T;
}