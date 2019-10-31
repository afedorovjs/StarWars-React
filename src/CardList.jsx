/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import Card from './Card';

function CardList({
  results, handleSubmit, setSearch, loadMore, hasMore, appElement, setCharacters,
}) {
  const needShowCard = (
    results.length !== 0
  );

  return (
    <>
      <form
        method="GET"
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
          hasMore={hasMore}
          initialLoad={false}
        >
          {/* {needShowCard
            ? (results.map(({ name, url }) => (
              <Card
                name={name}
                url={url}
                key={name}
                appElement={appElement}
              />
            )))
            : <div className="noCharactersFound">No characters found.</div>} */}
        </InfiniteScroll>
      </ul>
    </>
  );
}

const mapStateToProps = (state) => ({
  films: state.films,
  characters: state.characters,
  search: state.search,
});

const mapDispatchToProps = (dispatch) => ({
    setCharactersAction: searchQuery => dispatch(setCharacters(searchQuery)),
    setSearchAction: searchQuery => dispatch(setSearchText(searchQuery)),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardList);
