import React from 'react';

const Selector = ({pokemon, select}) => {
  const options = pokemon.map((p, i) => {
    return (<option key={i} value={i}>{p.name}</option>);
  });

  const handleChange = (e) => {
    select(e.target.value);
  }

  return (
    <select defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a pokemon</option>
      {options}
    </select>
  );
}

export default Selector;
