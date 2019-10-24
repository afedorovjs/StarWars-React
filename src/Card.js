import React, { useCallback, useState } from 'react';
import Modal from './Modal';

function fetchData(url) {
  return fetch(url).then(result => result.json());
}

function Card({ name, url }) {
  const firstLetter = name[0];
  const [isOpen, setIsOpen] = useState(false);
  const [fetchResponse, setFetchResponse] = useState(null);
  const [homeworld, setHomeworld] = useState(null);
  const [species, setSpecies] = useState(null);
  const [films, setFilms] = useState(null);
  const filmsArray = [];

  const openModal = useCallback(() => {
    setIsOpen(true);
    if (fetchResponse === null) {
      fetchData(url).then(
        (resp) => {
          setFetchResponse(resp);

          fetchData(resp.homeworld).then(
            (resp) => {
              setHomeworld(resp.name);
            }
          );

          fetchData(resp.species).then(
            (resp) => {
              setSpecies(resp.name);
            }
          );
          
          resp.films.forEach((film) => {
              fetchData(film).then(
                (resp) => {
                  filmsArray.push(resp.title);
                }
              )
            }
          );

          setFilms(filmsArray);
        }
      );
    }
  }, [setFetchResponse, fetchResponse, url, setHomeworld, setSpecies, setFilms, filmsArray]);

  // const filmsList = films.map((film) => {return <span>{ film }</span>});
  console.log('films:', films);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const needRenderModal = (
    (fetchResponse !== null) && (films !== null) && isOpen
  );
  return (
    <>
      <li>
        <div className="card" onClick={ openModal }>
          <div className="avatarWrapper">
            <div className="avatar">{ firstLetter }</div>
            <p className="avatarName">{ name }</p>
            <p className="avatarSpecies">Species</p>
          </div>
        </div>
      </li>
      {needRenderModal && (
        <Modal
          fetchResponse={fetchResponse}
          onClose={closeModal}
          homeworld={homeworld}
          species={species}
          films={films}
        />
      )}
    </>
  );
}

export default Card;
