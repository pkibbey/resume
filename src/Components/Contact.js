import React, { Component } from 'react';
import MdMessage from 'react-icons/lib/md/message';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Section Contact">
        <h3 className="Section__Header">
          <MdMessage className="Section__Icon" />
          Contact
        </h3>
        <ul>
          <li>LinkedIn</li>
          <li>Email</li>
          <li>Facebook</li>
          <li>Twitter</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
