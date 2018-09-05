import IFoodsConfig from '../interfaces/iFoodsConfig.js';

export default class FoodsConfig implements IFoodsConfig {
	constructor(
		public foods: number = 3
	) { }
}