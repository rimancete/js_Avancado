// combinar reduces redux
import { combineReducers } from 'redux';
// importando reducers redux
import exampleReducer from './example/reducer';

export default combineReducers({
  example: exampleReducer,
});
