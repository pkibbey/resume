import React, { Component } from 'react';
import MdPerson from 'react-icons/lib/md/person';
import './TestimonialsPerson.css';

class Testimonials extends Component {
  render() {
    return (
      <div className="TestimonialsPerson">
        <MdPerson className="Testimonials__Icon" />
        <div className="TestimonialsPerson-details">
          <div className="TestimonialsPerson-name">{this.props.person.name}</div>
          <div>{this.props.person.quote}</div>
        </div>
      </div>
    );
  }
}

export default Testimonials;
