import ISize from './../interfaces/size.js';

export default class Size implements ISize {
	constructor(
		public width: number = 0,
		public height: number = 0,
	) { }
}