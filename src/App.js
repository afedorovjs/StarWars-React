import React from 'react';
import Card from './Card';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="app">
      
      <header className="header">
        <div className="logoWrapper">
          <div className="logoStar"></div>
          <p className="logoText">CHARACTER ENCYCLOPEDIA</p>
          <div className="logoWars"></div>
        </div>
      </header>

      <form action="" method="" className="form">
        <input 
          type="text" 
          className="input" 
          placeholder="Search by name"
        /><button type="submit" className="searchButton" />
      </form>
      
      <main className="cardContainer"> 
        <Card />
      </main>

      <footer className="footer">
        <div className="footerText">
          <p className="footerText">STAR WARS CHARACTER ENCYCLOPEDIA, 2019</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
