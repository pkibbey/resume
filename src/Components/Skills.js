import React, { Component } from 'react';
import MdVideogameAsset from 'react-icons/lib/md/videogame-asset';
import './Skills.css';

class Skills extends Component {
  render() {
    return (
      <div className="Section Skills">
        <h3 className="Section__Header">
          <MdVideogameAsset className="Section__Icon" />
          Skills
        </h3>
        <ul>
          <li>HTML5</li>
          <li>React</li>
          <li>ES6</li>
          <li>React Native</li>
          <li>Git</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>Atom</li>
          <li>Making things look pretty</li>
          <li>Can beat anyone at Mario Kart</li>
        </ul>
      </div>
    );
  }
}

export default Skills;
