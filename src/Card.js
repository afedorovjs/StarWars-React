import React from 'react';


function Card({ openModal, name, url }) {
  const firstLetter = name.slice(0, 1);
  
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
    </>
  );
}

export default Card;
