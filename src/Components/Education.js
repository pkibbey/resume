import React, { Component } from 'react';
import MdSchool from 'react-icons/lib/md/school';
import './Education.css';
import EducationSchool from './EducationSchool';
import SectionHeader from './SectionHeader';

const data = [
  {
      name: 'St Laurance',
      location: 'Bradford on Avon, Wiltshire'
  },
  {
      name: 'Leicester University',
      location: 'Leicester, Leicestershire'
  },
  {
      name: 'School of Life',
      location: 'The World'
  }
];

class Education extends Component {
  render() {
    return (
      <div className="Section Education">
        <SectionHeader
          icon={<MdSchool className="Section__Icon" />}
          name='Education'
        />
        <div className="Ecucation_Schools">
          {
            data.map((school, i) => <EducationSchool key={i} school={school} />)
          }
        </div>
      </div>
    );
  }
}

export default Education;
