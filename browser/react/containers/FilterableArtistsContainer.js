import React, { Component } from 'react';
import FilterInput from '../components/FilterInput.js';
import Artists from '../components/Artists';
import NewPlaylist from '../components/Playlist';

export default class FilterableArtistsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
  const value = evt.target.value;
  this.setState({
    inputValue: value
  });

  // filteredArtists(artist) {
  //   if (artist.name === this.state.input.name) true;
  // }
}

  render () {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist =>
    artist.name.match(inputValue));
    return (
      <div>
        <FilterInput handleChange={this.handleChange} />
        <Artists artists={filteredArtists} />
      </div>
    );
  }
}
