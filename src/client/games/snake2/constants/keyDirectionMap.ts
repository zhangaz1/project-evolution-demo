import IKeyDirectionMap from '../interfaces/iKeyDirectionMap.js';
import DirectionsMap from './directionsMap.js';

const keyDirectionMap: IKeyDirectionMap = {};
DirectionsMap.forEach(map => keyDirectionMap[map.keyCode] = map.direction);

export default keyDirectionMap;