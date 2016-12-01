import React, { Component } from 'react';
import MdPool from 'react-icons/lib/md/pool';
import './Interests.css';

class Interests extends Component {
  render() {
    return (
      <div className="Section Interests">
        <h3 className="Section__Header">
          <MdPool className="Section__Icon" />
          Interests
        </h3>
        <ul>
          <li>Learning</li>
          <li>Having new experiences</li>
          <li>Traveling</li>
          <li>Having a higher level of conversation</li>
          <li>Being the best version of myself I can be</li>
          <li>Living outside of my comfort zone</li>
          <li>Challenging myself and the people that I care about</li>
          <li>Cycling and Snowboarding</li>
          <li>Making mixes of high energy electronic music</li>
          <li>Virtual Reality</li>
          <li>Science Fiction</li>
          <li>Portrait Photography and Digital Manipulation</li>
        </ul>
      </div>
    );
  }
}

export default Interests;
