import {
	IPosition,
} from './../types/index.js';

export { IVenue };
export default interface IVenue {
	readonly columns: number;
	readonly rows: number;

	randomPosition(): IPosition;

	ensurePosition(position: IPosition): IPosition;
}