import { combineReducers } from "redux";
import dataReducers from './Reducer';
const rootReducer = combineReducers({
    data:dataReducers
});

export default rootReducer;