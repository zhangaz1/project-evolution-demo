import KeyCode from './../types/keyCode.js';
import Directions from './../enums/directions.js';
import Vector from './../types/vector.js';

export default interface DirectionMap {
	keyCode: KeyCode,
	direction: Directions,
	vector: Vector
}