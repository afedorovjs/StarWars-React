import React from 'react';
import './StarWarsPreloader.css';
import falcon from './img/falcon.svg'

export default function ModalStarWarsPreloader(props) {
  
  return (
    <div className="preloaderWrapper">
     <img src={falcon} className="lds-ring" alt="fireSpot"/>
    </div>
  );
}