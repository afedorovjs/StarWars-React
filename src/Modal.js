import React from 'react';
import Portal from './Portal';

import './Modal.css';

function Modal({ onCancel }) {
  return (
        <Portal>
            <div className="modalWrapper">
              <div className="modalWindow">
                <button className="modalCloseBtn" onClick={onCancel}/>
                <div className="modalHeader">
                  <div className="modalAvatar">N</div>
                  <p>Name</p>
                </div>
                <div className="modalBody">
                  <div className="threeWrapper">
                    <div className="titlesWrapper">
                      <span className="iconDOB"/>
                      <span className="titles">Birth year</span>
                      <span className="titleValue">Birth year</span>
                    </div>
                    <div className="titlesWrapper">
                      <span className="iconSpecies"/>
                      <span className="titles">Species</span>
                      <span className="titleValue">Species</span>
                    </div>
                    <div className="titlesWrapper">
                      <span className="iconGender"/>
                      <span className="titles">Gender</span>
                      <span className="titleValue">Gender</span>
                    </div>
                  </div>
                  <div className="threeWrapper">
                    <div className="titlesWrapper">
                      <span className="iconHomeworld"/>
                      <span className="titles">Homeworld</span>
                      <span className="titleValue">Homeworld</span>
                    </div>
                    <div className="titlesWrapper">
                      <span className="iconFilms"/>
                      <span className="titles">Films</span>
                      <span className="titleValue">Films</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </Portal>
  )
}

export default Modal;
