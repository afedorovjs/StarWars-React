/* eslint-disable react/prop-types */
import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import StarWarsPreloader from './StarWarsPreloader';
import Card from './Card';

function CardList({
  results, searchQuery, handleSubmit, handleChange, loadMore, hasMore,
}) {
  const loader = <StarWarsPreloader />;
  // const items = [];

  // results.map((name) => {
  //   items.push(
  //     <Card
  //       name={name}

  //       key={name}
  //     />,
  //   );
  // });

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
        >
          {results.map(({ name, url }) => (
            <Card
              name={name}
              url={url}
              key={name}
            />
          ))}
        </InfiniteScroll>
      </ul>
    </>
  );
}

export default CardList;
