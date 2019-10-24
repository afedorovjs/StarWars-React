import React from 'react';
import './preloader.css';

export default function Preloader(props) {
  return (
    <div className="preloader">
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  );
}