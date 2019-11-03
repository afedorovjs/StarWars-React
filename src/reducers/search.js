/* eslint-disable import/prefer-default-export */
import { CHANGE_SEARCH_TEXT } from '../actions/searchActions';

const initialState = {
  searchQuery: null,
};

export function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchQuery: action.payload.searchQuery,
      };

    default:
      return state;
  }
}
