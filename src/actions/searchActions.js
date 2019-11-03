/* eslint-disable import/prefer-default-export */
export const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';

export function setSearchText(searchQuery) {
  return {
    type: CHANGE_SEARCH_TEXT,
    payload: {
      searchQuery,
    },
  };
}
