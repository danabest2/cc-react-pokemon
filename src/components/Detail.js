import React from 'react';

const Detail = ({pokemon}) => {
  return pokemon ? <h2>{pokemon.name}</h2> : null;
}

export default Detail;
