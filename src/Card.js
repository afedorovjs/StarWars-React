import React, { useCallback, useState } from 'react';
import Modal from './Modal';

function fetchData(url) {
  return fetch(url).then(result => result.json());
}

function Card({ name, url }) {
  const firstLetter = name[0];
  const [isOpen, setIsOpen] = useState(false);
  const [fetchResponse, setFetchResponse] = useState({ data: null, error: false });

  const openModal = useCallback(() => {
    setIsOpen(true);
    if (fetchResponse.data === null) {
      fetchData(url).then(
        (resp) => {
          setFetchResponse({ data: resp });
        },
        (error) => {
          setFetchResponse({ data: null, error: `Some error occured ${error.name}`});
        }
      );
    }
  }, [setFetchResponse, fetchResponse, url]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const needRenderModal = (
    (fetchResponse.data !== null || !fetchResponse.error) &&
    isOpen
  );

  return (
    <>
      <li>
        <div className="card" onClick={openModal}>
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
        />
      )}
    </>
  );
}

export default Card;
