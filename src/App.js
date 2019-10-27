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
      result: {},
      results: [],
      isLoading: true,
      nextHref: null,
      hasMoreItems: true,
    };
    this.loadItems = this.loadItems.bind(this);
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    // this.fetchData(searchQuery);
    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 2000);
  }

  loadItems(page) {
    const self = this;
    let url = (`${BASE_PATH}${PEOPLE_PATH}`);

    if(this.state.nextHref) {
        url = this.state.nextHref;
    }

    if(this.state.searchQuery !== '') {
      url = (`${BASE_PATH}${PEOPLE_PATH}${SEARCH_PATH}${this.state.searchQuery}`)

      // this.setState({
      //   results: [],
      // });

      // console.log('results', this.state.results);
    }

    fetch(url).then(res => res.json())
      .then((resp) => {
        if(resp) {
          if(this.state.searchQuery !== '') {
            this.setState({
              results: [],
            });
          }
          console.log('results', this.state.results);
          const results = this.state.results;

          resp.results.map((person) => {
            results.push(person);
          });

          if(resp.next) {
            self.setState({
              results: results,
              nextHref: resp.next,
            });
          } else {
            self.setState({
              hasMoreItems: false,
            });
          }
        }
    });

    setTimeout(() => {
      this.setState({
        isLoading: false,
      })
    }, 2000);
}

  fetchData = (searchQuery) => {
    fetch(`${BASE_PATH}${PEOPLE_PATH}${SEARCH_PATH}${searchQuery}`)
      .then(res => res.json())
      .then(result => {
        const results = this.state.results;

        result.results.map((person) => {
          results.push(person);
        });

        this.setResult(results);
        setTimeout(() => {
          this.setState({
            isLoading: false,
          })
        }, 2000);
      })
  }

  setResult = (results) => {
    this.setState({
      results
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchQuery } = this.state;
    this.setState({
      isLoading: true,
    });
    this.fetchData(searchQuery);
  }

  handleChange = (event) => {
    this.setState({searchQuery: event.target.value})
  }

  render() {
    const { searchQuery, result } = this.state;
    const { results = [] } = result;

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
            searchQuery={searchQuery}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            fetchDataApp={this.fetchData}
            loadMore={this.loadItems}
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
