import IPoint from './point.js';
import IFood from './food.js';

export default interface Foods<T extends IFood> {
	eat(position: IPoint): T;
}