import IPoint from './iPoint.js';
import IFood from './iFood.js';

export default interface IFoods<T extends IFood> {
	readonly foods: IFood[];
	eat(position: IPoint): T;
}