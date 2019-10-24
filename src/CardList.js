import React from 'react';
import Card from './Card';

function CardList({ results, searchQuery, handleSubmit, handleChange }) {
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
      /><button type="submit" className="searchButton"/>
      </form>
      <ul className="cardList">
        {results.map(({ name, url }) => 
          <Card
            name={name}
            url={url}
            key={url}
          />
        )}
      </ul>
    </>
  )
}

export default CardList;
