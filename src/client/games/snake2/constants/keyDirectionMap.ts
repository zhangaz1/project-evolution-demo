import IKeyDirectionMap from './../interfaces/keyDirectionMap.js';
import DirectionsMap from './directionsMap.js';

const keyDirectionMap: IKeyDirectionMap = {};
DirectionsMap.forEach(map => keyDirectionMap[map.keyCode] = map.direction);

export default keyDirectionMap;