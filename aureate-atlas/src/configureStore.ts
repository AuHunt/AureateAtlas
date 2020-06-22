import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import logger from 'redux-logger';
import { testReducer } from 'reducers/TestReducer';
import { TAppActions } from 'types/actionTypes';

export const rootReducer = combineReducers({
    testReducer
});

export type TAppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<TAppState, TAppActions>, logger)
);
