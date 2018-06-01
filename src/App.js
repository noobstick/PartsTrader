import React, { Component } from 'react';
import Example from './Example';
import logo from './logo.svg';
import './App.css';
import TradePanel from './TradePanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example />
        <div class="title">Trades</div>
        <TradePanel />
      </div>
    );
  }
}

export default App;
