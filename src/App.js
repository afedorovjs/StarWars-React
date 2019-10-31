import React, { Component } from 'react';
import { connect } from 'react-redux'
import CardList from './CardList';
import StarWarsPreloader from './StarWarsPreloader';
import { setCharacters } from './actions/charactersActions';

import './reset.css';
import './App.css';

const BASE_PATH = 'https://swapi.co/api/';
const SEARCH_PATH = '?search=';
const PEOPLE_PATH = 'people/';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: [],
      isLoading: true,
      hasMoreItems: true,
    };

    this.nextHref = null;
    this.isLoadingItems = false;
    this.appRef = React.createRef();
  }

  componentDidMount() {
    this.loadMore();
  }

  loadMore = () => {
    if(!this.isLoadingItems) {
      this.loadItems();
    }
  }

  loadItems = (searchHref) => {
    let url = (`${BASE_PATH}${PEOPLE_PATH}`);

    this.isLoadingItems = true;

    if(this.nextHref) {
      url = this.nextHref;
    }

    if(searchHref === null) {
      url = (`${BASE_PATH}${PEOPLE_PATH}${SEARCH_PATH}${this.state.searchQuery}`);

      this.nextHref = searchHref;

      this.setState({
        hasMoreItems: true,
      });
    }

    fetch(url).then((resp) => resp.json())
      .then((resp) => {
          const { results } = this.state;
          const newResults = [...results, ...resp.results];

          this.setState({
            results: newResults,
          });

          if(resp.next) {
            this.nextHref = resp.next;
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

          this.isLoadingItems = false;
        }
      );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const searchHref = null;

    this.setState({
      isLoading: true,
      results: [],
    });
    this.loadItems(searchHref);
  }

  // handleChange = (event) => {
  //   this.setState({searchQuery: event.target.value});
  // }

  render() {
    return (
      <div ref={this.appRef} className="app">
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
            appElement={this.appRef.current}
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



const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCharacters: searchQuery => dispatch(setCharacters(searchQuery)),
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
