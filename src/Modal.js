import React, { useEffect, useState } from 'react';
import Portal from './Portal';

import './Modal.css';

function Modal({ onClose, name,  }) {

  return (
        <Portal>
            <div className="modalWrapper">
              <div className="modalWindow">
                <button className="modalCloseBtn" onClick={onClose}/>
                <div className="modalHeader">
                  <div className="modalAvatar">N</div>
                  <p>name</p>
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
