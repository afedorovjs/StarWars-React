import React, { Component } from 'react';
import CardList from './CardList';
import StarWarsPreloader from './StarWarsPreloader';

import './reset.css';
import './App.css';

const BASE_PATH = 'https://swapi.co/api/';
const SEARCH_PATH = '?search=';
const PEOPLE_PATH = 'people/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: [],
      isLoading: true,
      nextHref: null,
      hasMoreItems: true,
      isLoadingItems: false,
    };
  }

  componentDidMount() {
    this.loadMore();
  }

  loadMore = () => {
    if(!this.state.isLoadingItems) {
        this.loadItems();
    }
}

  loadItems = (nextHref) => {
    let url = (`${BASE_PATH}${PEOPLE_PATH}`);

    this.setState({
      isLoadingItems: true,
    })

    if(this.state.nextHref) {
      url = this.state.nextHref;
    }

    if(nextHref === null) {
      url = (`${BASE_PATH}${PEOPLE_PATH}${SEARCH_PATH}${this.state.searchQuery}`)

      this.setState({
        nextHref: nextHref,
        hasMoreItems: true,
      })
    }

    fetch(url).then((resp) => resp.json())
      .then((resp) => {
          const { results } = this.state;
          const newResults = [...results, ...resp.results];

          this.setState({
            results: newResults,
          });

          if(resp.next) {
            this.setState({
              nextHref: resp.next,
            });
          } else {
            this.setState({
              hasMoreItems: false,
            });
          }

          setTimeout(() => {
            this.setState({
              isLoading: false,
            });
          }, 2000);

          setTimeout(() => {
            this.setState({
              isLoadingItems: false,
            });
          }, 100);
        }
      );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const nextHref = null;

    this.setState({
      isLoading: true,
      results: [],
    });
    this.loadItems(nextHref);
  }

  handleChange = (event) => {
    this.setState({searchQuery: event.target.value})
  }

  render() {
    const appElement = document.getElementById('app');

    return (
      <div id="app" className="app">
        <header className="header">
          <div className="logoWrapper" onClick={() => window.location.reload()}>
            <div className="logoStar"></div>
            <p className="logoText">CHARACTER ENCYCLOPEDIA</p>
            <div className="logoWars"></div>
          </div>
        </header>

        <main className="cardContainer"> 
          {this.state.isLoading ?
          <StarWarsPreloader/> : <CardList
            results={this.state.results}
            searchQuery={this.state.searchQuery}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            loadMore={this.loadMore}
            hasMore={this.state.hasMoreItems}
            appElement={appElement}
          />}
        </main>
        
        <footer className="footer">
          <div className="footerText">
            <p className="footerText">STAR WARS CHARACTER ENCYCLOPEDIA, 2019</p>
          </div>
        </footer>
      </div>
    );
  };
}

export default App;
