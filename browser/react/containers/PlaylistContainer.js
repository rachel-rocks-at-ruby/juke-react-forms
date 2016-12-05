import React, { Component } from 'react';
import FilterInput from '../components/FilterInput.js';
import Artists from '../components/Artists';
import NewPlaylist from '../components/Playlist';

export default class PlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      disabled: true,
      showAlert: false,
      visibility: 'hidden'
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitted = this.submitted.bind(this);
  }

  handleChange (evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
    if (value.length > 14 || value.length === 0) {
      this.setState({ disabled: true, visibility: 'visible' })
    } else {
      this.setState({ disabled: false, visibility: 'hidden' })
    }
  }

  submitted (evt) {
    console.log("console from submitted: ", this.state.inputValue);
    this.setState({
      inputValue: ''
    })
  }

  render () {
    return (
      <div>
      <NewPlaylist handleChange={this.handleChange} submitted={this.submitted} inputValue={this.state.inputValue} disabled={this.state.disabled} visibility={this.state.visibility} />
      </div>
    );
  }
}
