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
  DropdownItem
} from 'reactstrap';

export default class TradePanel extends React.Component {
  createPosts(i){
    let postsTable = [];
    const posts = i;
    for(let i = 0; i < posts; i++){
      postsTable.push(<TradePost key={i} name="testing123"/>)
    }

    return postsTable;
  }

  render() {
    const posts = this.props.posts;
    return (
      <div className="tradePanel">
        <section class="box">
          {this.createPosts(posts)}
        </section>
      </div>
    );
  }
}