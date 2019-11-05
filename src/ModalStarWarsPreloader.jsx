import React from 'react';
import falcon from './img/falcon.svg';

import './css/StarWarsPreloader.css';

export default function ModalStarWarsPreloader() {
  return (
    <div className="preloaderWrapper fadeIn">
      <img src={falcon} className="falconPreloader" alt="falcon" />
    </div>
  );
}
