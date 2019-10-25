import React, { useCallback, useState } from 'react';
import Modal from './Modal';

function fetchData(url) {
  return fetch(url).then(result => result.json());
}

function Card({ name, url }) {
  const firstLetter = name[0];
  const [isOpen, setIsOpen] = useState(false);
  const [fetchResponse, setFetchResponse] = useState(null);
  // const [homeworld, setHomeworld] = useState(null);
  // const [species, setSpecies] = useState(null);
  // const [films, setFilms] = useState(null);
  // const filmsArray = [];

  const openModal = useCallback(() => {
    setIsOpen(true);
    if (fetchResponse === null) {
      fetchData(url).then(
        (resp) => {
          setFetchResponse(resp);
        }
      );
    }
  }, [setFetchResponse, fetchResponse, url, ]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const needRenderModal = (
    (fetchResponse !== null) && isOpen
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
          fetchData={fetchData}
        />
      )}
    </>
  );
}

export default Card;
