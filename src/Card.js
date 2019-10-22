import React, { useCallback, useState } from 'react';
import Modal from './Modal';


function Card({ isOpen, openModal, onClose, name, url }) {
  const firstLetter = name.slice(0, 1);
  
  // const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(
    () => {
      openModal(url);
    },
    [openModal, url]
  );

  return (
    <>
      <li>
        <div className="card" onClick={onOpen}>
          <div className="avatarWrapper">
            <div className="avatar">{ firstLetter }</div>
            <p className="avatarName">{ name }</p>
            <p className="avatarSpecies">Species</p>
          </div>
        </div>
      </li>
      { isOpen ? (
          <Modal
            onClose={onClose}
          />
        ) : null
      }
    </>
  );
}

export default Card;
