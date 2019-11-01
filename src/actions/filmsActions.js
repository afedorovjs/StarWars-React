export const GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS';
export const GET_FILMS_FAIL = 'GET_FILMS_FAIL';

const BASE_FILMS_PATH = 'https://swapi.co/api/films/';

let titlesArr = [];

function fetchFilms(url) {
  fetch(url).then((resp) => resp.json())
    .then((resp) => {
      resp.results.forEach((film) => {
        titlesArr.push([film.title, film.url]);
      });
    });
}

export function getFilms() {
  fetchFilms(BASE_FILMS_PATH);

  return (dispatch) => {
    dispatch({
      type: GET_FILMS_SUCCESS,
      payload: {
        films: titlesArr,
      },
    });
  };
}
