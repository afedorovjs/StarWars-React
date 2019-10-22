import React, { Component } from 'react';
import Card from './Card';
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
      modalResult: {},
      isOpen: false,
    };
  }

  componentDidMount() {
    const { searchQuery } = this.state;
    this.fetchData(searchQuery);
  }

  fetchData = (searchQuery) => {
    fetch(`${BASE_PATH}${PEOPLE_PATH}${SEARCH_PATH}${searchQuery}`)
      .then(res => res.json())
      .then(result => this.setData(result))
      .catch(error => error)
  }

  setData = (result) => {
    this.setState({ result })
  }

  setModalData = (modalResult) => {
    this.setState({ modalResult })
  }

  showModal = (currentUrl) => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    
    fetch(currentUrl)
      .then(result => result.json())
      .then(result => this.setModalData(result))
      .catch(error => error)
    
    console.log('modalResult:', this.state.modalResult);
  }

  // closeModal = () => {
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  // }

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

        <form
          method="GET" 
          className="form" 
          onSubmit={this.handleSubmit}
        >
          <input
            type="text" 
            value={searchQuery}
            className="input" 
            placeholder="Search by name"
            onChange={this.handleChange}
          /><button type="submit" className="searchButton" />
        </form>

        <main className="cardContainer"> 
          <ul className="cardList">
            {results.map(({ name, url }) => 
              <Card
                name={name}
                url={url}
                key={url}
              />
            )}
          </ul>
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
