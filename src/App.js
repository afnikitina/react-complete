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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons});
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person 
                      click={ () => this.deletePersonHandler(index) }
                      name={ person.name }
                      age={ person.age } />
            }) 
          }
        </div>    
      );
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <div>
          <button 
            style={style}
            onClick={this.togglePersonsHander}>Switch Name</button>
        </div>
        { persons }          
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi there!'));
  }
}

export default App;
