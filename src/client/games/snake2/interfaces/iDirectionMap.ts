import {
	Directions
} from './../enums/index.js';

import {
	KeyCode,
	Vector,
} from './../types/index.js';

export { IDirectionMap };
export default interface IDirectionMap {
	keyCode: KeyCode,
	direction: Directions,
	vector: Vector
}