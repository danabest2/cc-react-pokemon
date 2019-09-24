import React from 'react';

const Detail = ({pokemon}) => {
  if (!pokemon) return null;
  const nameNode = <h2>Name: {pokemon.name}</h2>;
  if (!pokemon.id) return (nameNode);
  return (
    <>
      {nameNode}
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <img src={pokemon.sprites.front_default}/>
    </>
  );
}

export default Detail;
