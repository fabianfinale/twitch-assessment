import { combineReducers } from 'redux';
import auth from './auth';
import entities from './entities';

const reducer = combineReducers({
  auth,
  entities,
});

export default reducer;
