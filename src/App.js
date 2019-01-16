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

  render() {
    const char = this.state.inputText.split('').map(ch => {
      return <CharComponent character={ch} />
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
