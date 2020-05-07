/* eslint-disable import/prefer-default-export */
export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL';
export const DELETE_CHARACTERS = 'DELETE_CHARACTERS';
const BASE_PATH = 'https://swapi.dev/api/';
const SEARCH_PATH = '?search=';
const PEOPLE_PATH = 'people/';


function getMoreCharacters(url, dispatch) {
  fetch(url).then((resp) => resp.json())
    .then((resp) => {
      dispatch({
        type: GET_CHARACTERS_SUCCESS,
        payload: {
          characters: resp.results,
          nextHref: resp.next || null,
          hasMoreItems: Boolean(resp.next),
        },
      });
    });
}

export const deleteCharacters = () => (
  {
    type: DELETE_CHARACTERS,
  }
);

export function setCharacters() {
  let url = (`${BASE_PATH}${PEOPLE_PATH}`);

  return (dispatch, getState) => {
    const { searchQuery } = getState().search;
    const { nextHref } = getState().characters;

    if (searchQuery) {
      url = (`${BASE_PATH}${PEOPLE_PATH}${SEARCH_PATH}${searchQuery}`);
    }

    dispatch({
      type: GET_CHARACTERS_REQUEST,
    });

    if (nextHref) {
      url = nextHref;
    }

    getMoreCharacters(url, dispatch);
  };
}
