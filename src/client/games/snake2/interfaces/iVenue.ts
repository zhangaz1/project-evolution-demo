import {
	IPosition,
	IObstacle,
} from './../types/index.js';

export { IVenue };
export default interface IVenue {
	readonly columns: number;
	readonly rows: number;
	readonly obstacles: IPosition[];

	randomPosition(): IObstacle;

	ensurePosition(position: IPosition): IPosition;
}