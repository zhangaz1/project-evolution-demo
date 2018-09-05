import {
	IEngineConfig,
} from './../interfaces/index.js';

export { EngineConfig };
export default class EngineConfig implements IEngineConfig {
	constructor(
		public interval: number = 100,
	) { }
}