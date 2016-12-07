import React, { Component } from 'react';
import MdVideogameAsset from 'react-icons/lib/md/videogame-asset';
import './Skills.css';
import { TagCloud } from "react-tagcloud";
import SectionHeader from './SectionHeader';

const data = [
  { value: "JavaScript", count: 58 },
  { value: "React", count: 72 },
  { value: "Nodejs", count: 28 },
  { value: "React Native", count: 50 },
  { value: "HTML5", count: 40 },
  { value: "Git", count: 35 },
  { value: "CSS3", count: 44 },
  { value: "Making things look pretty", count: 34 },
  { value: "Atom", count: 25 },
  { value: "Winning at Mario Kart", count: 32 }
];

const options = {
  luminosity: 'light',
  hue: 'monochrome'
};

class Skills extends Component {
  render() {
    return (
      <div className="Section Skills">
        <SectionHeader
          icon={<MdVideogameAsset className="Section__Icon" />}
          name='Skills'
        />
        <div className="Skills__Cloud">
          <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
            colorOptions={options}
            onClick={tag => alert(`'${tag.value}' was selected!`)}
          />
        </div>
      </div>
    );
  }
}

export default Skills;
