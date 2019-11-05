import React from 'react';
import falcon from './img/falcon.svg';

import './css/StarWarsPreloader.css';

export default function StarWarsPreloader() {
  return (
    <div className="preloader fadeIn">
      <img src={falcon} className="falconPreloader" alt="fireSpot" />
    </div>
  );
}
