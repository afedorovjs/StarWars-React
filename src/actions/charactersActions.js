/* eslint-disable import/prefer-default-export */
export const SET_CHARACTERS = 'SET_CHARACTERS';

export function setCharacters(data) {
  return {
    type: 'SET_CHARACTERS',
    payload: data,
  };
}
