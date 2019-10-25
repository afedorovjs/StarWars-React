import React, { Component } from 'react';
import Portal from './Portal';
import ModalStarWarsPreloader from './ModalStarWarsPreloader';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.fetchResponse,
      onClose: props.onClose,
      isLoading: true,
      homeworld: null,
      species: null,
      films: null,
    }
  }

  componentDidMount() {
    const { data } = this.state;
    this.fetchData(data);
  }

  fetchData = (data) => {
    const filmsArray = [];

    fetch(data.homeworld)
      .then(res => res.json())
      .then(result => {
        this.setState({
          homeworld: result.name,
        });
      })
      .then(
        fetch(data.species)
        .then(res => res.json())
        .then(result => {
          this.setState({
            species: result.name,
          });
        })
      )

      data.films.forEach((film) => {
          fetch(film)
            .then(result => result.json())
            .then((resp) => {
                filmsArray.push(resp.title);
              }
            )
        }
      );

      this.setState({
        films: filmsArray,
      });

      setTimeout(() => {
        this.setState({isLoading: false})
      }, 4000);
  }

  render() {
    return (
      <>
        <Portal>
        {this.state.isLoading ?
          <ModalStarWarsPreloader/> : (
          <div className="modalWrapper">
            <div className="modalWindow">
              <button className="modalCloseBtn" onClick={ this.state.onClose }/>
              <div className="modalHeader">
                <div className="modalAvatar">{ this.state.data.name[0] }</div>
                <p>{ this.state.data.name }</p>
              </div>
              <div className="modalBody">
                <div className="threeWrapper">
                  <div className="titlesWrapper">
                    <span className="iconDOB"/>
                    <span className="titles">Birth year</span>
                    <span className="titleValue">{ this.state.data.birth_year }</span>
                  </div>
                  <div className="titlesWrapper">
                    <span className="iconSpecies"/>
                    <span className="titles">Species</span>
                    <span className="titleSpecies">{ this.state.species }</span>
                  </div>
                  <div className="titlesWrapper">
                    <span className="iconGender"/>
                    <span className="titles">Gender</span>
                    <span className="titleGender">{ this.state.data.gender }</span>
                  </div>
                </div>
                <div className="threeWrapper">
                  <div className="titlesWrapper">
                    <span className="iconHomeworld"/>
                    <span className="titles">Homeworld</span>
                    <span className="titleValue">{ this.state.homeworld }</span>
                  </div>
                  <div className="titlesWrapper">
                    <span className="iconFilms"/>
                    <span className="titlesFilms">Films</span>
                    <div className="titleList">{this.state.films.map((film) => {return <span>{ film }</span>})}</div>
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

export default Modal;
