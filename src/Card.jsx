/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { useCallback, useState, useEffect } from 'react';
import Modal from './Modal';

function Card({ name, url, films, homeworld, species, gender, birthYear, appRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(null);

  const firstLetter = name[0];
  const avatarRef = React.createRef();
  let rgbColor = null;

  const getColor = () => {
    const colorArr = [];

    while (colorArr.length < 3) colorArr.push(Math.floor(Math.random() * 255));

    return rgbColor = 'rgb('+ colorArr.join(', ') +')';
  };

  useEffect(() => {
    avatarRef.current.style.backgroundColor = getColor();

    setColor(rgbColor);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    appRef.current.classList.add('blur');
    document.body.classList.add('scroll-hidden');
  }, [setIsOpen, appRef]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    appRef.current.classList.remove('blur');
    document.body.classList.remove('scroll-hidden');
    appRef.current.classList.add('blurOut');
    setTimeout(() => appRef.current.classList.remove('blurOut'), 1000);
  }, [setIsOpen, appRef]);

  return (
    <>
      <li>
        <div className="card fadeInUp" onClick={openModal}>
          <div className="avatarWrapper">
            <div ref={avatarRef} className="avatar">{ firstLetter }</div>
            <p className="avatarName">{ name }</p>
            <p className="avatarGender">{ gender }</p>
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
          color={color}
        />
      )}
    </>
  );
}

export default Card;
