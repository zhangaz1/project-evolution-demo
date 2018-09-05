import {
	Directions
} from './../enums/index.js';

export { IKeyDirectionMap };
export default interface IKeyDirectionMap {
	[key: number]: Directions
}