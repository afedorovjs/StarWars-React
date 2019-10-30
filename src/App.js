import React, { Component } from 'react';
import CardList from './CardList';
import StarWarsPreloader from './StarWarsPreloader';

const BASE_PATH = 'https://swapi.co/api/';
const SEARCH_PATH = '?search=';
const PEOPLE_PATH = 'people/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      result: {},
      results: [],
      isLoading: true,
      nextHref: null,
      hasMoreItems: true,
    };
  }

  componentDidMount() {
    this.loadItems();
    
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 2000);
  }

  loadItems = (nextHref) => {
    let url = (`${BASE_PATH}${PEOPLE_PATH}`);

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

    fetch(url).then(res => res.json())
      .then((resp) => {
          const results = this.state.results;

          resp.results.map((person) => {
            results.push(person);
          });

          if(resp.next) {
            this.setState({
              results: results,
              nextHref: resp.next,
            });
          } else {
            this.setState({
              hasMoreItems: false,
            });
          }
        }
    );

    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 2000);
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
    return (
      <div className="app">
        <header className="header">
          <div className="logoWrapper">
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
            fetchDataApp={this.fetchData}
            loadItems={this.loadItems}
            hasMore={this.state.hasMoreItems}
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
