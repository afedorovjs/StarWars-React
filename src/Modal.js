import React from 'react';
import Portal from './Portal';
import './Modal.css';

function Modal({ onClose, fetchResponse, homeworld, species, films }) {
  const data = fetchResponse;
  const firstLetter = data.name[0];
  
  return (
    <Portal>
      <div className="modalWrapper">
        <div className="modalWindow">
          <button className="modalCloseBtn" onClick={ onClose }/>
          <div className="modalHeader">
            <div className="modalAvatar">{ firstLetter }</div>
            <p>{ data.name }</p>
          </div>
          <div className="modalBody">
            <div className="threeWrapper">
              <div className="titlesWrapper">
                <span className="iconDOB"/>
                <span className="titles">Birth year</span>
                <span className="titleValue">{ data.birth_year }</span>
              </div>
              <div className="titlesWrapper">
                <span className="iconSpecies"/>
                <span className="titles">Species</span>
                <span className="titleSpecies">{ species }</span>
              </div>
              <div className="titlesWrapper">
                <span className="iconGender"/>
                <span className="titles">Gender</span>
                <span className="titleGender">{ data.gender }</span>
              </div>
            </div>
            <div className="threeWrapper">
              <div className="titlesWrapper">
                <span className="iconHomeworld"/>
                <span className="titles">Homeworld</span>
                <span className="titleValue">{ homeworld }</span>
              </div>
              <div className="titlesWrapper">
                <span className="iconFilms"/>
                <span className="titlesFilms">Films</span>
                <div className="titleList">{ films }</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default Modal;
