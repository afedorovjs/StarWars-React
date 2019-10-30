/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { charactersReducer } from './characters';
import { filmsReducer } from './films';

export const rootReducer = combineReducers({
  films: filmsReducer,
  character: charactersReducer,
});
