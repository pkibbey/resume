import React, { Component } from 'react';
import MdImportantDevices from 'react-icons/lib/md/important-devices';
import './Workflow.css';
import SectionHeader from './SectionHeader';

class Workflow extends Component {
  render() {
    return (
      <div className="Section Workflow">
        <SectionHeader
          icon={<MdImportantDevices className="Section__Icon" />}
          name='Workflow'
        />
        <ul>
          <li>I prefer to work in MacOS because the interface is pretty and I am 6.28% more productive than when working on a Windows machine (I made up that statistic, it is probably more like 8.64% more productive)</li>
          <li>I like working face to face with people, being able to share ideas directly and listen to their feedback is another boost in productivity for me. I care about the little things that make the entire teams workflow easier, and being close to those people help me understand them better.</li>
          <li>I enjoy moments of silence at night when I can nerd out and find creative solutions to problems with no noise around me, but I would trade that for a lively environment any day. There is only so much you can learn in a silo.</li>
        </ul>
        <ul>
          <li>Scaffoloding a project with React-Create-App</li>
          <li>Componentize everything, since everything will change anyway</li>
          <li>Think about how this project may evolve in the future</li>
          <li>Think about who else will be touching this project</li>
          <li>Prepare for change</li>
          <li>Node package management for awesomeness</li>
          <li>Git for saving things - feature branches for the win</li>
          <li>Code editors with .Editorconfig so that all engineers can have beautiful code</li>
          <li>I care about readability, which is also why I like ES6</li>
          <li>Simplicity is important to me</li>
        </ul>
      </div>
    );
  }
}

export default Workflow;
