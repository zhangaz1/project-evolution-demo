import IDirectionVectorMap from '../interfaces/iDirectionVectorMap.js';
import DirectionsMap from './directionsMap.js';

const directionVectorMap: IDirectionVectorMap = {};
DirectionsMap.forEach(map => directionVectorMap[map.direction] = map.vector);

export default directionVectorMap;