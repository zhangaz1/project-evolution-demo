import DirectionMap from './../interfaces/directionMap.js';

import KeyCodes from './../enums/keyCodes.js';
import Directions from './../enums/directions.js';
import Vector from './../models/point.js';

const DirectionsMap: DirectionMap[] = [
	{
		keyCode: KeyCodes.Left,
		direction: Directions.Left,
		vector: new Vector(-1, 0)
	},
	{
		keyCode: KeyCodes.Up,
		direction: Directions.Up,
		vector: new Vector(0, -1)
	},
	{
		keyCode: KeyCodes.Right,
		direction: Directions.Right,
		vector: new Vector(1, 0)
	},
	{
		keyCode: KeyCodes.Down,
		direction: Directions.Down,
		vector: new Vector(0, 1)
	},
];

export default DirectionsMap;