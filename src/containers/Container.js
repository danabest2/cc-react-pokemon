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
    this.select = this.select.bind(this);
  }

  componentDidMount() {
    const url = 'http://pokeapi.co/api/v2/pokemon/?limit=151';
    fetch(url)
      .then(r => r.json())
      .then(data => this.setState({pokemon: data.results}))
      .catch(err => console.error(err));
  }

  getPokemonDetails(pokemon) {
    const url = pokemon.url;
    fetch(url)
      .then(r => r.json())
      .then(data => this.setState({selectedPokemon: data}))
      .catch(err => console.error(err));
  }

  select(i) {
    const selectedPokemon = this.state.pokemon[i];
    this.setState({selectedPokemon});
    this.getPokemonDetails(selectedPokemon);
  }

  render() {
    return(
    <div>
      <h1>Pokemon</h1>
      <Selector pokemon={this.state.pokemon} select={this.select} />
      <Detail pokemon={this.state.selectedPokemon} />
    </div>
    );
  }
}

export default Container;
