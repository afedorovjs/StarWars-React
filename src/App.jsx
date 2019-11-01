import React, { Component } from 'react';
import CardList from './CardList';
import StarWarsPreloader from './StarWarsPreloader';

import './reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.appRef = React.createRef();
  }

  render() {
    return (
      <div ref={this.appRef} className="app">
        <header className="header">
          <div className="logoWrapper">
            <div className="logoStar" />
            <p className="logoText">CHARACTER ENCYCLOPEDIA</p>
            <div className="logoWars" />
          </div>
        </header>

        <main className="cardContainer">
          {false
            ? <StarWarsPreloader /> : (
              <CardList
                appElement={this.appRef.current}
              />
            )}
        </main>

        <footer className="footer">
          <div className="footerText">
            <p className="footerText">STAR WARS CHARACTER ENCYCLOPEDIA, 2019</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
