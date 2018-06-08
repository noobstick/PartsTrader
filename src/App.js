import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';
import TradePanel from './TradePanel';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import MarketPage from './MarketPage';
import RouteConfig from './RouteConfig';

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouteConfig />
      </div>
    );
  }
}

export default App;
