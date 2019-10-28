import React from 'react';
import './StarWarsPreloader.css';
import falcon from './img/falcon.svg';

export default function StarWarsPreloader() {
  return (
    <div className="preloader fadeIn">
      <img src={falcon} className="falconPreloader" alt="fireSpot" />
    </div>
  );
}
