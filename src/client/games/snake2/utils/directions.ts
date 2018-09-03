import Directions from './../enums/directions.js';

export function isDirectionOpposite(
	directionA: Directions,
	directionB: Directions
) {
	return directionA + directionB === 0;
}