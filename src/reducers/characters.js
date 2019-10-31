/* eslint-disable import/prefer-default-export */
import {
  GET_CHARACTERS_REQUEST,
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_FAIL,
} from '../actions/charactersActions';

const initialState = {
  characters: [],
  isFetching: false,
  hasMoreItems: true,
  nextHref: null,
  error: '',
};

export function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTERS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };

    case GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload.characters,
        nextHref: action.payload.nextHref,
        hasMoreItems: action.payload.hasMoreItems,
        isFetching: false,
        error: '',
      };

    case GET_CHARACTERS_FAIL:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    default:
      return state;
  }
}
