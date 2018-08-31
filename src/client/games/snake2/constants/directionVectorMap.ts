import IDirectionVectorMap from './../interfaces/directionVectorMap.js';
import DirectionsMap from './directionsMap.js';

const directionVectorMap: IDirectionVectorMap = {};
DirectionsMap.forEach(map => directionVectorMap[map.direction] = map.vector);

export default directionVectorMap;