import {
	IKeyDirectionMap
} from './../interfaces/index.js';

import {
	DirectionsMap
} from './index.js';

export const keyDirectionMap: IKeyDirectionMap = {};
DirectionsMap.forEach(map => keyDirectionMap[map.keyCode] = map.direction);

export default keyDirectionMap;