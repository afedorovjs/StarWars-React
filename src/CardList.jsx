/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { setCharacters } from './actions/charactersActions';
import { setSearchText } from './actions/searchActions';
import Card from './Card';

function CardList({
  characters, hasMoreItems, appElement, setSearch, setCharactersList, searchQuery, isFetching, nextHref,
}) {

  const needShowCard = (
    characters.length !== 0
  );

  const loadMore = () => {
    if (!isFetching) {
      setCharactersList(searchQuery);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCharactersList(searchQuery);
  };

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="input"
          placeholder="Search by name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="searchButton" />
      </form>
      <ul className="cardList">
        <InfiniteScroll
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMoreItems}
          initialLoad={false}
        >
          {needShowCard
            ? (characters.map(({ name, url }) => (
              <Card
                name={name}
                url={url}
                key={name}
                appElement={appElement}
              />
            )))
            : <div className="noCharactersFound">No characters found.</div>}
        </InfiniteScroll>
      </ul>
    </>
  );
}

const mapStateToProps = (state) => {
  let { searchQuery } = state.search;
  let { hasMoreItems } = state.characters;
  let { characters } = state.characters;
  let { isFetching } = state.characters;
  let { nextHref } = state.characters;

  return {
    characters,
    searchQuery,
    hasMoreItems,
    isFetching,
    nextHref,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setCharactersList: (searchQuery) => dispatch(setCharacters(searchQuery)),
  setSearch: (searchQuery) => dispatch(setSearchText(searchQuery)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardList);
