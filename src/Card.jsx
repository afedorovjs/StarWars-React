/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import Modal from './Modal';

function fetchData(url) {
  return fetch(url).then((result) => result.json());
}

function Card({ name, url }) {
  const firstLetter = name[0];
  const [isOpen, setIsOpen] = useState(false);
  const [fetchResponse, setFetchResponse] = useState(null);

  const openModal = useCallback(() => {
    setIsOpen(true);
    if (fetchResponse === null) {
      fetchData(url).then(
        (resp) => {
          setFetchResponse(resp);
        },
      );
    }
  }, [setFetchResponse, fetchResponse, url]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const needRenderModal = (
    (fetchResponse !== null) && isOpen
  );
  return (
    <>
      <li>
        <div className="card fadeIn" onClick={openModal}>
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
          isOpen={isOpen}
        />
      )}
    </>
  );
}

export default Card;
