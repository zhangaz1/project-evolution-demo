import {
	ISize,
} from './../interfaces/index.js';

export { Size };
export default class Size implements ISize {
	constructor(
		public width: number = 0,
		public height: number = 0,
	) { }
}