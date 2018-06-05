import React from 'react';

export default class TradePost extends React.Component{
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
            </div>
        )
    }
}