import React, { Component } from 'react';
import CardList from './CardList';
import Preloader from './Preloader/Preloader';
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
      isLoading: true,
    };
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    this.fetchData(searchQuery);
  }

  fetchData = (searchQuery) => {
    fetch(`${BASE_PATH}${PEOPLE_PATH}${SEARCH_PATH}${searchQuery}`)
      .then(res => res.json())
      .then(result => {
        this.setResult(result);
        setTimeout(() => {
          this.setState({isLoading: false})
        }, 2000);
      })
  }

  setResult = (result) => {
    this.setState({ result })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { searchQuery } = this.state;
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
          <Preloader/> : <CardList
            results={results}
            searchQuery={searchQuery}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
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
