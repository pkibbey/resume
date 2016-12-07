import React, { Component } from 'react';
import MdPeople from 'react-icons/lib/md/people';
import TestimonialsPerson from './TestimonialsPerson';
import './Testimonials.css';
import SectionHeader from './SectionHeader';

const data = [
  {
    name: 'Person Person',
    quote: 'Hooray!'
  },
  {
    name: 'Second Person',
    quote: 'Hooray! This is an even longer quote'
  },
  {
    name: 'Third Person',
    quote: 'Boo! This is a shorter quote'
  }
];

class Testimonials extends Component {
  render() {
    return (
      <div className="Section Testimonials">
        <SectionHeader
          icon={<MdPeople className="Section__Icon" />}
          name='Testimonials'
        />
        <div className="Testimonials_People">
          {
            data.map((person, i) => <TestimonialsPerson key={i} person={person} />)
          }
        </div>
      </div>
    );
  }
}

export default Testimonials;
