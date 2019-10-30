/* eslint-disable import/prefer-default-export */
import { SET_CHARACTERS } from '../actions/charactersActions';

export function charactersReducer(state = {}, action) {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
