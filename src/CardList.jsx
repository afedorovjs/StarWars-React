/* eslint-disable react/prop-types */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Card from './Card';

function CardList({
  results, searchQuery, handleSubmit, handleChange, loadMore, hasMore, appElement,
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
          value={searchQuery}
          className="input"
          placeholder="Search by name"
          onChange={handleChange}
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
          {needShowCard
            ? (results.map(({ name, url }) => (
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

export default CardList;
