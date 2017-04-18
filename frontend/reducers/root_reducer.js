import SessionReducer from './session_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
