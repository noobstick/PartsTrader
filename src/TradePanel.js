import React from 'react';
import TradePost from './TradePost';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem
// } from 'reactstrap';

export default class TradePanel extends React.Component {
  createData() {
    const data = {
      trades: [
        {
          id: 0,
          name: "GTX 1070",
          url: "https://www.amazon.com/PNY-GeForce-Overclocked-Graphics-VCGGTX10606XGPB-OC2/dp/B0792SPV7Q/ref=sr_1_3?ie=UTF8&qid=1528154636&sr=8-3&keywords=graphic+cards&dpID=516KKX2rFXL&preST=_SY300_QL70_&dpSrc=srch",
          owner: "Tam",
          image: "https://images-na.ssl-images-amazon.com/images/I/6145FE9VWbL._SL1024_.jpg"
        },
        {
          id: 1,
          name: "GTX 1080",
          url: "https://www.amazon.com/ASUS-GeForce-STRIX-Graphics-STRIX-GTX1080-A8G-GAMING/dp/B01K5F8MJK/ref=sr_1_1?s=pc&ie=UTF8&qid=1528155179&sr=1-1&keywords=1080",
          owner: "Dawn",
          image: "https://images-na.ssl-images-amazon.com/images/I/71rA%2BgFEsEL._SL1200_.jpg"
        },
        {
          id: 0,
          name: "GTX 1070",
          url: "https://www.amazon.com/PNY-GeForce-Overclocked-Graphics-VCGGTX10606XGPB-OC2/dp/B0792SPV7Q/ref=sr_1_3?ie=UTF8&qid=1528154636&sr=8-3&keywords=graphic+cards&dpID=516KKX2rFXL&preST=_SY300_QL70_&dpSrc=srch",
          owner: "Tam",
          image: "https://images-na.ssl-images-amazon.com/images/I/6145FE9VWbL._SL1024_.jpg"
        },
        {
          id: 1,
          name: "GTX 1080",
          url: "https://www.amazon.com/ASUS-GeForce-STRIX-Graphics-STRIX-GTX1080-A8G-GAMING/dp/B01K5F8MJK/ref=sr_1_1?s=pc&ie=UTF8&qid=1528155179&sr=1-1&keywords=1080",
          owner: "Dawn",
          image: "https://images-na.ssl-images-amazon.com/images/I/71rA%2BgFEsEL._SL1200_.jpg"
        },
        {
          id: 0,
          name: "GTX 1070",
          url: "https://www.amazon.com/PNY-GeForce-Overclocked-Graphics-VCGGTX10606XGPB-OC2/dp/B0792SPV7Q/ref=sr_1_3?ie=UTF8&qid=1528154636&sr=8-3&keywords=graphic+cards&dpID=516KKX2rFXL&preST=_SY300_QL70_&dpSrc=srch",
          owner: "Tam",
          image: "https://images-na.ssl-images-amazon.com/images/I/6145FE9VWbL._SL1024_.jpg"
        },
        {
          id: 1,
          name: "GTX 1080",
          url: "https://www.amazon.com/ASUS-GeForce-STRIX-Graphics-STRIX-GTX1080-A8G-GAMING/dp/B01K5F8MJK/ref=sr_1_1?s=pc&ie=UTF8&qid=1528155179&sr=1-1&keywords=1080",
          owner: "Dawn",
          image: "https://images-na.ssl-images-amazon.com/images/I/71rA%2BgFEsEL._SL1200_.jpg"
        },
        {
          id: 0,
          name: "GTX 1070",
          url: "https://www.amazon.com/PNY-GeForce-Overclocked-Graphics-VCGGTX10606XGPB-OC2/dp/B0792SPV7Q/ref=sr_1_3?ie=UTF8&qid=1528154636&sr=8-3&keywords=graphic+cards&dpID=516KKX2rFXL&preST=_SY300_QL70_&dpSrc=srch",
          owner: "Tam",
          image: "https://images-na.ssl-images-amazon.com/images/I/6145FE9VWbL._SL1024_.jpg"
        },
        {
          id: 1,
          name: "GTX 1080",
          url: "https://www.amazon.com/ASUS-GeForce-STRIX-Graphics-STRIX-GTX1080-A8G-GAMING/dp/B01K5F8MJK/ref=sr_1_1?s=pc&ie=UTF8&qid=1528155179&sr=1-1&keywords=1080",
          owner: "Dawn",
          image: "https://images-na.ssl-images-amazon.com/images/I/71rA%2BgFEsEL._SL1200_.jpg"
        },
        {
          id: 1,
          name: "GTX 1080",
          url: "https://www.amazon.com/ASUS-GeForce-STRIX-Graphics-STRIX-GTX1080-A8G-GAMING/dp/B01K5F8MJK/ref=sr_1_1?s=pc&ie=UTF8&qid=1528155179&sr=1-1&keywords=1080",
          owner: "Dawn",
          image: "https://images-na.ssl-images-amazon.com/images/I/71rA%2BgFEsEL._SL1200_.jpg"
        },
      ]
    }

    return data;
  }
  createPosts(i) {
    const posts = i;
    const postsTable = [];
    for (let i = 0; i < posts.length; i++) {
      postsTable.push(<TradePost key={i} trade={posts[i]}/>)
    }

    return postsTable;
  }

  render() {
    const data = this.createData();
    const trades = data.trades;
    return (
      <div className="tradePanel-container">
        <section className="box">
          {this.createPosts(trades)}
        </section>
      </div>
    );
  }
}