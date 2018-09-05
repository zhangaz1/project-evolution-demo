import {
	IPoint,
	IFood
} from './index.js';

export { IFoods };
export default interface IFoods<T extends IFood> {
	readonly foods: IFood[];
	eat(position: IPoint): T;
}