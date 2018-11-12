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
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHander = (newName, newAge) => {
    // console.log('Was clicked!');
    // this.state.person[0].name = 'Maximiliam';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Sarah', age: 29 },
        { name: 'Caleb', age: 17 },
        { name: 'Jude', age: newAge }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Joy', age: 34 },
        { name: 'Chelsea', age: 39 },
        { name: 'Caleb', age: 17 },
        { name: event.target.value, age: 29 }
      ]
    })
  }

  togglePersonsHander = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '3px solid red',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <div>
          <button 
            style={style}
            onClick={this.togglePersonsHander}>Switch Name</button>
        </div>
        { this.state.showPersons ?
          <div>
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
            />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
            />
            <Person 
              name={this.state.persons[2].name} 
                age={this.state.persons[2].age}
                click={this.switchNameHander.bind(this, 'Ryan', 32)}
            >My hobby is music</Person>
            <Person 
              name={this.state.persons[3].name} 
              age={this.state.persons[3].age}
              changed={this.nameChangedHandler}
            />
          </div> : null }      
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi there!'));
  }
}

export default App;
