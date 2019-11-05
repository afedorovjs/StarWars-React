import React from 'react';
import falcon from './img/falcon.svg';

import './css/Preloader.css';

export default function ModalPreloader() {
  return (
    <div className="preloaderWrapper fadeIn">
      <img src={falcon} className="falconPreloader" alt="falcon" />
    </div>
  );
}
