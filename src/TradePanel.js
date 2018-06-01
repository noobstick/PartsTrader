import React from 'react';
import TradePost from './TradePost';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  export default class TradePanel extends React.Component {
    render() {
      return (
        <div>
          <section class="box">
            <TradePost name={"Testing 123"}/>
            <TradePost />
            <TradePost />
          </section>
          <section class="box">
            <TradePost />
            <TradePost />
            <TradePost />
            <TradePost />
          </section>
          </div>
      );
    }
  }