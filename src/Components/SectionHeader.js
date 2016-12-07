import React, { Component } from 'react';
import './SectionHeader.css';

class SectionHeader extends Component {
  render() {
    return (
      <div className="Section__Header">
        {this.props.icon}
        <h3>{this.props.name}</h3>
      </div>
    );
  }
}

export default SectionHeader;
