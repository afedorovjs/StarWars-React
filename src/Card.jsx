/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import Modal from './Modal';

function Card({ name, url, films, homeworld, species, gender, birthYear, appElement}) {
  const firstLetter = name[0];
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
    appElement.classList.add('blur');
  }, [setIsOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    appElement.classList.remove('blur');
    appElement.classList.add('blurOut');
    setTimeout(() => appElement.classList.remove('blurOut'), 2100);
  }, [setIsOpen]);

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
      {isOpen && (
      <Modal
        onClose={closeModal}
        name={name}
        films={films}
        homeworld={homeworld}
        species={species}
        gender={gender}
        birthYear={birthYear}
        url={url}
      />
      )}
    </>
  );
}

export default Card;
