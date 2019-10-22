import React, { useCallback, useState } from 'react';
import Modal from './Modal';


function fetchData(url) {
  fetch(url)
      .then(result => result.json())
      .then(result => this.setModalData(result))
      .catch(error => error)
}

function Card({ name, url }) {
  const firstLetter = name.slice(0, 1);
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(
    () => {
      setIsOpen(!isOpen);
    },
    [isOpen]
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

          />
        ) : null
      }
    </>
  );
}

export default Card;
