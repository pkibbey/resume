import React, { Component } from 'react';
import MdPerson from 'react-icons/lib/md/person';
import './TestimonialsPerson.css';

class Testimonials extends Component {
  render() {
    return (
      <div className="TestimonialsPerson">
        <MdPerson className="Section__Icon" />
        <h4>Person Guy</h4>
        <p>A quote from a person about how they feel about something</p>
      </div>
    );
  }
}

export default Testimonials;
