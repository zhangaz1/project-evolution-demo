import IFoodsConfig from '../interfaces/iFoodsConfig.js';

export { FoodsConfig };
export default class FoodsConfig implements IFoodsConfig {
	constructor(
		public foods: number = 3
	) { }
}