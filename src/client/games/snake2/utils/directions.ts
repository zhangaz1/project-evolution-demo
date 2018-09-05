import {
	Directions
} from './../enums/index.js';

export function isDirectionOpposite(
	directionA: Directions,
	directionB: Directions
) {
	return directionA + directionB === 0;
}