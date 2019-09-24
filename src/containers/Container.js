import React, { Component } from 'react';
import Detail from '../components/Detail.js';
import Selector from '../components/Selector.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemon: null
    };
  }

  render() {
    return(
    <div>
      <h1>Pokemon</h1>
      <Selector />
      <Detail />
    </div>
    );
  }
}

export default Container;
