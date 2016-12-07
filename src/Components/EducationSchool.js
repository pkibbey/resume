import React, { Component } from 'react';
import './EducationSchool.css';

class EducationSchool extends Component {
  render() {
    return (
      <div className="EducationSchool">
        {this.props.school.name}
      </div>
    );
  }
}

export default EducationSchool;
