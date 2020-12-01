// combinar reduces redux
import { combineReducers } from 'redux';
// importando reducers redux
import auth from './auth/reducer';

export default combineReducers({
  auth,
});
