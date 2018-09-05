import IEngineConfig from '../interfaces/iEngineConfig.js';

export { EngineConfig };
export default class EngineConfig implements IEngineConfig {
	constructor(
		public interval: number = 100,
	) { }
}