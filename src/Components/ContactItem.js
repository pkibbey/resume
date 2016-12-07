import React, { Component } from 'react';
import './ContactItem.css';

class ContactItem extends Component {
  render() {
    return (
      <div className="Contact__Item">
        {this.props.contact.icon}
        <a href={this.props.contact.link}>{this.props.contact.name}</a>
      </div>
    );
  }
}

export default ContactItem;
