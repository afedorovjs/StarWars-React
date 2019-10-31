/* eslint-disable import/prefer-default-export */
export const GET_CHARACTERS_REQUEST = 'GET_CHARACTERS_REQUEST';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAIL = 'GET_CHARACTERS_FAIL';

const BASE_PATH = 'https://swapi.co/api/';
const SEARCH_PATH = '?search=';
const PEOPLE_PATH = 'people/';
// const newCharacters = [];

function getMoreCharacters(url, dispatch) {
  fetch(url).then((resp) => resp.json())
    .then((resp) => {
      let newCharacters = [...resp.results];

      if (resp.next) {
        dispatch({
          type: GET_CHARACTERS_SUCCESS,
          payload: {
            characters: newCharacters,
            nextHref: resp.next,
            hasMoreItems: true,
          },
        });
      } else {
        dispatch({
          type: GET_CHARACTERS_SUCCESS,
          payload: {
            characters: newCharacters,
            nextHref: null,
            hasMoreItems: false,
          },
        });
      }
    });

  // return newCharacters;
}

export function setCharacters(searchQuery) {
  let url = (`${BASE_PATH}${PEOPLE_PATH}`);

  if (searchQuery) {
    url = (`${BASE_PATH}${PEOPLE_PATH}${SEARCH_PATH}${searchQuery}`);
  }

  return (dispatch, getState) => {
    dispatch({
      type: GET_CHARACTERS_REQUEST,
    });

    if (getState().characters.nextHref) {
      url = getState().characters.nextHref;
    }

    getMoreCharacters(url, dispatch, getState);
  };
}
