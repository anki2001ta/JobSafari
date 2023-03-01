import {Reducer as AppReducer} from "./AppReducer/Reducer";
import{Reducer as AuthReducer} from "./AuthReducer/Reducer"
import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers
} from "redux";

import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let rootReducer=combineReducers(AppReducer,AuthReducer)

const store = legacy_createStore(
    rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
