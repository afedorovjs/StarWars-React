/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { setCharacters, deleteCharacters } from './actions/charactersActions';
import { setSearchText } from './actions/searchActions';
import { getFilms } from './actions/filmsActions';
import makeDelay from './utils/makeDelay';
import Card from './Card';

const CardList = ({ characters, hasMoreItems, appRef, setSearch, setCharactersList, isFetching, getFilms, }) => {
  useEffect(() => getFilms(), [getFilms]);

  const needShowCard = characters.length !== 0;

  const loadMore = () => {
    if (!isFetching) {
      setCharactersList();
    }
  };

  return (
    <>
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Search by name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="searchButton" />
      </div>

      <ul className="cardList">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMoreItems}
          scrollThreshold='100px'
        >
          {needShowCard
            ? (characters.map(({ name, url, films, homeworld, species, gender, birth_year }) => (
              <Card
                name={name}
                url={url}
                key={name}
                films={films}
                homeworld={homeworld}
                appRef={appRef}
                species={species}
                gender={gender}
                birthYear={birth_year}
              />
            )))
            : <div className="noCharactersFound fadeIn">No characters found.</div>}
        </InfiniteScroll>
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  const { hasMoreItems, characters, isFetching } = state.characters;
  const { films } = state.films;

  return {
    characters,
    hasMoreItems,
    isFetching,
    films,
  };
};

const mapDispatchToProps = (dispatch) => {
  const debouncedSearch = makeDelay(() => dispatch(setCharacters()), 1000);

  return {
    setCharactersList: () => {
      dispatch(setCharacters());
    },
    setSearch: (searchQuery) => {
      dispatch(deleteCharacters());
      dispatch(setSearchText(searchQuery));
      debouncedSearch();
    },
    getFilms: () => {
      dispatch(getFilms());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardList);
