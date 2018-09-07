import {
	GameModes,
} from './../enums/index.js';

export { IVenueConfig };
export default interface IVenueConfig {
	columns: number;
	rows: number;
	gameMode: GameModes;
	obstacles: number;
}