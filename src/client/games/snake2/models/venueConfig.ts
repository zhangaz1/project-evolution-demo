import IVenueConfig from './../interfaces/venueConfig.js';

export default class VenueConfig implements IVenueConfig {
	columns: number = 20;
	rows: number = 40;

	constructor() { }
}