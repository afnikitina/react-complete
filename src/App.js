import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <Person name="Max" age="28"/>
        <Person name="Sarah" age="29"/>
        <Person name="Caleb" age="17">My hobbie is music</Person>
        <Person name="Jude" age="29"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi there!'));
  }
}

export default App;
