import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { homepageReducer } from 'reducers/homepageReducer';

export const rootReducer = combineReducers({
    homepageReducer
});

export type TAppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
