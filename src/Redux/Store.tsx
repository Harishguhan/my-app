import { createStore, applyMiddleware } from "redux";

import reduxThunk from "redux-thunk";
import rootReducer from "./Root-Reducer";

const middlewares = [reduxThunk];

// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
