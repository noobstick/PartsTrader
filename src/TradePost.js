import React from 'react';

export default class TradePost extends React.Component{
    render(){
        const name = this.props.name;
        return (
            <div class="trade">{name}</div>
        )
    }
}