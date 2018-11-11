import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Sarah', age: 29 },
      { name: 'Caleb', age: 17 },
      { name: 'Jude', age: 29 }
    ],
    otherState: 'some other value'
  }

  switchNameHander = () => {
    // console.log('Was clicked!');
    // this.state.person[0].name = 'Maximiliam';
    this.setState({
      persons: [
        { name: 'Maximiliam', age: 28 },
        { name: 'Sarah', age: 29 },
        { name: 'Caleb', age: 17 },
        { name: 'Jude', age: 30 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <button onClick={this.switchNameHander}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobby is music</Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi there!'));
  }
}

export default App;
