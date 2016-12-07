import React, { Component } from 'react';
import MdMessage from 'react-icons/lib/md/message';
import './Contact.css';
import SectionHeader from './SectionHeader';
import ContactItem from './ContactItem';
import FacebookOfficial from 'react-icons/lib/fa/facebook-official';
import LinkedIn from 'react-icons/lib/fa/linkedin';
import Envelope from 'react-icons/lib/fa/envelope';
import Twitter from 'react-icons/lib/fa/twitter';

const data = [
  {
      name: 'LinkedIn',
      link: 'http://www.linkedin.com/phineas.kibbey',
      icon: <LinkedIn className="Contact__Item-icon" />
  },
  {
      name: 'Email',
      link: 'mailto://phineas.kibbey@gmail.com',
      icon: <Envelope className="Contact__Item-icon" />
  },
  {
      name: 'Facebook',
      link: 'http://www.facebook.com/phineas.kibbey',
      icon: <FacebookOfficial className="Contact__Item-icon" />
  },
  {
      name: 'Twitter',
      link: 'http://www.twiter.com/phineask',
      icon: <Twitter className="Contact__Item-icon" />
  }
];

class Contact extends Component {
  render() {
    return (
      <div className="Section Contact">
        <SectionHeader
          icon={<MdMessage className="Section__Icon" />}
          name='Contact'
        />
        <div className="Contact__Wrapper">
          {
            data.map((contact, i) => <ContactItem key={i} contact={contact} />)
          }
        </div>
      </div>
    );
  }
}

export default Contact;
