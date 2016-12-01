import React, { Component } from 'react';
import MdSchool from 'react-icons/lib/md/school';
import './Education.css';

class Education extends Component {
  render() {
    return (
      <div className="Section Education">
      <h3 className="Section__Header">
        <MdSchool className="Section__Icon" />
        Education
      </h3>
      <ul>
        <li>St Laurence School - Bradford on Avon, UK</li>
        <li>Leicester University - Leicester, UK</li>
        <li>The rest of the world</li>
      </ul>
      </div>
    );
  }
}

export default Education;
