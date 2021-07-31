import { combineReducers } from 'redux';
import channels from './channels';

const entities = combineReducers({ channels });

export default entities;
