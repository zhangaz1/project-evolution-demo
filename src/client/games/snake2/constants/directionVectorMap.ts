import {
	IDirectionVectorMap
} from './../interfaces/index.js';

import {
	DirectionsMap
} from './index.js';

export const directionVectorMap: IDirectionVectorMap = {};
DirectionsMap.forEach(map => directionVectorMap[map.direction] = map.vector);

export default directionVectorMap;