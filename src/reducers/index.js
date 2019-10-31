/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { charactersReducer } from './characters';
import { filmsReducer } from './films';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
  films: filmsReducer,
  characters: charactersReducer,
  search: searchReducer,
});
