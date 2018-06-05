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
        <div className="trade-title">Trades</div>
        <TradePanel posts='16'/>
      </div>
    );
  }
}

export default App;
