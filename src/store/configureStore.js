/* eslint-disable import/prefer-default-export */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from '../reducers';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
