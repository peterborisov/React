import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput'

class App extends Component {
  state = { name: 'Pete' }

  changeNameHandler = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Section 3</h1>
        <UserInput changed={this.changeNameHandler} currnetName={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name="Name Two" />
      </div>
    );
  }
}

export default App;
