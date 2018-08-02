import * as serve from 'koa-static';
import { getAbsolutPath } from './../common/utils.js';

const clientFolder = getAbsolutPath('./../client');
export default serve(clientFolder);