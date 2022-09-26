import { combineReducers } from 'redux';
import dataReducers from './dataReducers';
const rootReducer = combineReducers({
  data: dataReducers
});

export default rootReducer;
