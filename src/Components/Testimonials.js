import React, { Component } from 'react';
import MdPeople from 'react-icons/lib/md/people';
import TestimonialsPerson from './TestimonialsPerson';
import './Testimonials.css';

class Testimonials extends Component {
  render() {
    return (
      <div className="Section Testimonials">
        <h3 className="Section__Header">
          <MdPeople className="Section__Icon" />
          Testimonials
        </h3>
        <div className="Testimonials_People">
          <TestimonialsPerson />
          <TestimonialsPerson />
          <TestimonialsPerson />
        </div>
      </div>
    );
  }
}

export default Testimonials;
