import React from 'react';
import './StarWarsPreloader.css';
import falcon from './img/falcon.svg';

export default function ModalStarWarsPreloader() {
  return (
    <div className="preloaderWrapper fadeIn">
      <img src={falcon} className="falconPreloader" alt="falcon" />
    </div>
  );
}
