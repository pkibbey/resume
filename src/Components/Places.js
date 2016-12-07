import React, { Component } from 'react';
import MdBusiness from 'react-icons/lib/md/business';
import './Places.css';
import PlacesPlace from './PlacesPlace';
import SectionHeader from './SectionHeader';

const data = [
  {
    name: 'ILN',
    location: 'London',
    link: 'http://www.google.com'
  },
  {
    name: 'ILN',
    location: 'London',
    link: 'http://www.google.com'
  },
  {
    name: 'ILN',
    location: 'London',
    link: 'http://www.google.com'
  },
];

class Places extends Component {
  render() {
    return (
      <div className="Section Places">
        <SectionHeader
          icon={<MdBusiness className="Section__Icon"/>}
          name='Places'
        />
        <div className="Places-Wrapper">
          {
            data.map((place, i) => <PlacesPlace place={place} key={i}/>)
          }
        </div>
      </div>
    );
  }
}

export default Places;
