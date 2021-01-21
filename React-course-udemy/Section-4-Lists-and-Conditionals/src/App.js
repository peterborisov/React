import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }

  changeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteHandler = (index) => {
    const input = this.state.userInput.split('');
    input.splice(index, 1);
    const updatedInput = input.join('');
    this.setState({ userInput: updatedInput })
  }

  render() {
    const charList = this.state.userInput
      .split('')
      .map((el, index) => {
        return <CharComponent character={el} key={index} clicked={() => this.deleteHandler(index)} />
      })

    return (
      <div>
        <h1>Skeleton app</h1>
        <input onChange={this.changeHandler} />
        <p>{this.state.userInput}</p>
        <ValidationComponent inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
  }
}

export default App;
