import Config from './types/config.js';

const baseSize = 20;

export default class DefaultConfig implements Config {
	public readonly cellWidth = baseSize;
	public readonly cellHeight = baseSize;

	public readonly groundColumns = baseSize;
	public readonly groundRows = baseSize;

	public readonly cellBorderWidth = 1;
}

const defaultConfig = new DefaultConfig();
export {
	defaultConfig
};