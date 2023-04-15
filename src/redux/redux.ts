import thunk from 'redux-thunk';
import { rootReducer } from './reducer/rootReducer';
import { applyMiddleware, legacy_createStore } from "redux";

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))