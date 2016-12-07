import React, { Component } from 'react';
import './App.css';
import Places from './Components/Places';
import Skills from './Components/Skills';
import Workflow from './Components/Workflow';
import Interests from './Components/Interests';
import Testimonials from './Components/Testimonials';
import Education from './Components/Education';
import Contact from './Components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Interests />
        <Skills />
        <Places />
        <Workflow />
        <Testimonials />
        <Education />
        <Contact />
      </div>
    );
  }
}

export default App;
