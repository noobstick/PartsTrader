import React from 'react';
import {Button} from 'reactstrap';
import TradeModal from './TradeModal';
export default class TradePost extends React.Component{
    openTradeModal(){
        return (
            <TradeModal />
        );
    }
    render(){
        const trade = this.props.trade;
        return (
            <div className="trade-container">
                <div className="trade-img">
                    <img src={trade.image} />
                </div>
                <div className="trade-link">
                    <a title={trade.name} href={trade.url}>{trade.name}</a>
                </div>
                {/* <Button onClick={() => this.openTradeModal()}>
                    Trade
                </Button> */}
                <div><TradeModal buttonLabel="Trade"/></div>
            </div>
        )
    }
}