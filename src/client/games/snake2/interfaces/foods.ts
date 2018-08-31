import Point from './point.js';

export default interface Foods<T> {
	eat(position: Point): T;
}