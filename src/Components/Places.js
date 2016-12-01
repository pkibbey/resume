import React, { Component } from 'react';
import MdBusiness from 'react-icons/lib/md/business';
import './Places.css';

class Places extends Component {
  render() {
    return (
      <div className="Section Places">
        <h3 className="Section__Header">
          <MdBusiness className="Section__Icon" />
          Places
        </h3>
        <ul>
          <li>ILN - London</li>
          <li>Lennd - San Diego</li>
          <li>Digitaria - San Diego</li>
        </ul>
      </div>
    );
  }
}

export default Places;
