import DirectionMap from './../interfaces/directionMap.js';

import KeyCodes from './../enums/keyCodes.js';
import Directions from './../enums/directions.js';

const DirectionsMap: DirectionMap[] = [
	{
		keyCode: KeyCodes.Left,
		direction: Directions.Left,
		vector: { x: -1, y: 0 }
	},
	{
		keyCode: KeyCodes.Up,
		direction: Directions.Up,
		vector: { x: 0, y: -1 }
	},
	{
		keyCode: KeyCodes.Right,
		direction: Directions.Right,
		vector: { x: 1, y: 0 }
	},
	{
		keyCode: KeyCodes.Down,
		direction: Directions.Down,
		vector: { x: 0, y: 1 }
	},
];

export default DirectionsMap;