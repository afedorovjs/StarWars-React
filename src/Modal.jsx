import React, { Component } from 'react';
import { connect } from 'react-redux';
import Portal from './Portal';
import ModalPreloader from './ModalPreloader';

import './css/Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needShowLoader: true,
      homeworld: null,
      species: null,
      films: [],
      styles: 'modalWrapper animated fadeIn',
    }

    this.avatar = React.createRef();
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const filmsUrls = this.props.films;
    const titles = this.props.titles;
    const result = [];
    
    for (let i = 0; i < titles.length; i++) {
      filmsUrls.forEach((film) => {
        if (film === titles[i].url) result.push(titles[i].title)
      })
    }

    this.setState({
      needShowLoader: true,
      films: result,
    })

    if (this.props.homeworld !== null) {
      fetch(this.props.homeworld)
        .then(res => res.json())
        .then(result => {
          this.setState({
            homeworld: result.name,
          });
        })

      fetch(this.props.species)
        .then(res => res.json())
        .then(result => {
          this.setState({
            species: result.name,
          });
        })

      setTimeout(() => {
        this.setState({
          needShowLoader: false,
        });

        this.avatar.current.style.backgroundColor = this.props.color;
      }, 2000);
    }
  }

  closeModal = () => {
    this.setState({
      styles: 'modalWrapper animated fadeOut'
    });
    setTimeout(() => this.props.onClose(), 300);
  }

  render() {
    return (
      <>
        <Portal>
        {this.state.needShowLoader ?
          <ModalPreloader/> : (
          <div className={this.state.styles}>
            <div className="modalWindow">
              <button className="modalCloseBtn" onClick={ this.closeModal }/>
              <div className="modalHeader">
                <div ref={this.avatar} className="modalAvatar">{ this.props.name[0] }</div>
                <p>{ this.props.name }</p>
              </div>
              <div className="modalBody">
                <div className="threeWrapper">
                  <div className="titlesWrapper">
                    <span className="iconDOB"/>
                    <span className="titles">Birth year</span>
                    <span className="titleBirth">{ this.props.birthYear }</span>
                  </div>
                  <div className="titlesWrapper">
                    <span className="iconSpecies"/>
                    <span className="titles">Species</span>
                    <span className="titleSpecies">{ this.state.species }</span>
                  </div>
                  <div className="titlesWrapper">
                    <span className="iconGender"/>
                    <span className="titles">Gender</span>
                    <span className="titleGender">{ this.props.gender }</span>
                  </div>
                </div>
                <div className="filmsWrapper">
                  <div className="titlesWrapper">
                    <span className="iconHomeworld"/>
                    <span className="titles">Homeworld</span>
                    <span className="titleHomeworld">{ this.state.homeworld }</span>
                  </div>
                  <div className="titlesWrapper">
                    <span className="iconFilms"/>
                    <span className="titleFilms">Films</span>
                    <div className="titleList">{this.state.films.map((film, i) => (<span key={i}>{ film }</span>))}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        </Portal>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  let { films } = state.films;
  return {
    titles: films,
  }
}

export default connect(mapStateToProps)(Modal);
