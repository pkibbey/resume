import React, { Component } from 'react';
import './PlacesPlace.css';

class PlacesPlace extends Component {
  render() {
    return (
      <div className="PlacesPlace">
        <p>{this.props.place.name} - {this.props.place.location}</p>
      </div>
    );
  }
}

export default PlacesPlace;
