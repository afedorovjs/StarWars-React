/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/prop-types */
import React, { useCallback, useState, useEffect } from 'react';
import Modal from './Modal';

function Card({ name, url, films, homeworld, species, gender, birthYear, appElement }) {
  const firstLetter = name[0];
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState(null);
  const avatar = React.createRef();
  let rgbColor = null;

  const getColor = () => {
    const colorArr = [];
    while (colorArr.length < 3) colorArr.push(Math.floor(Math.random() * 255));

    rgbColor = 'rgb('+colorArr.join(', ')+')';
    return rgbColor;
  };

  useEffect(() => {
    avatar.current.style.backgroundColor = getColor();
    setColor(rgbColor);
  }, []);

  const openModal = useCallback(() => {
    setIsOpen(true);
    appElement.current.classList.add('blur');
    document.body.classList.add('scroll-hidden');
  }, [setIsOpen, appElement]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    appElement.current.classList.remove('blur');
    document.body.classList.remove('scroll-hidden');
    appElement.current.classList.add('blurOut');
    setTimeout(() => appElement.current.classList.remove('blurOut'), 1000);
  }, [setIsOpen, appElement]);

  return (
    <>
      <li>
        <div className="card fadeInUp" onClick={openModal}>
          <div className="avatarWrapper">
            <div ref={avatar} className="avatar">{ firstLetter }</div>
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
