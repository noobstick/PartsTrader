import React, { Component } from 'react';
import Example from './Example';
import logo from './logo.svg';
import './App.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Example />
        <div class="title">Trades</div>
        <section class="box">
          <div class="trade">testing</div>
          <div class="trade">testing</div>
          <div class="trade">testing</div>
        </section>
        <section class="box">
          <div class="trade">testing</div>
          <div class="trade">testing</div>
          <div class="trade">testing</div>
        </section>
      </div>
    );
  }
}

export default App;
