import React, { Component } from 'react';
import Hooks from './Hooks';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  render() {
    const {test} = this.state;
    return (
      <div className="App">
        <Hooks test={test}/>
      </div>
    );
  }
}

export default App;
