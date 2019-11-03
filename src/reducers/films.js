/* eslint-disable import/prefer-default-export */
import {
  GET_FILMS_SUCCESS,
  GET_FILMS_FAIL,
} from '../actions/filmsActions';

const initialState = {
  films: [],
};

export function filmsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload.films,
      };

    case GET_FILMS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
