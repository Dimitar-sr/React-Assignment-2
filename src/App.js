import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './components/ValidationComponent';
import CharComponent from './components/CharComponent';

class App extends Component {
  state = {
    inputText: ''
  }

  getInputText = (event) => {
    let text = event.target.value;
    this.setState({ inputText: text })
  }

  deleteCharFunc = (index) => {
    const enteredText = this.state.inputText.split('');
    enteredText.splice(index, 1);
    const updatedText = enteredText.join('');
    this.setState({ inputText: updatedText});
  }
 
  render() {
    const char = this.state.inputText.split('').map((ch, index) => {
      return <CharComponent 
      character={ch} 
      key={index} 
      clicked={() => this.deleteCharFunc(index)}
      />
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p>Input field</p>
        <input onChange={this.getInputText} type='text' placeholder='type here'/>
        <br/>
        <p>Text length: {this.state.inputText.length}</p>
        <ValidationComponent textLength={this.state.inputText.length} />
        {char}
      </div>
    );
  }
}

export default App;
