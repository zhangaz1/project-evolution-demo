import IVenueConfig from '../interfaces/iVenueConfig.js';

export { VenueConfig };
export default class VenueConfig implements IVenueConfig {
	columns: number = 20;
	rows: number = 30;

	constructor() { }
}