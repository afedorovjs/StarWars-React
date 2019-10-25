import React from 'react';
import './StarWarsPreloader.css';
import falcon from './img/falcon.svg'

export default function StarWarsPreloader(props) {
  
  return (
    <div className="preloader">
     <img src={falcon} className="lds-ring" alt="fireSpot"/>
    </div>
  );
}