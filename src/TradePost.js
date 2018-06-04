import React from 'react';

export default class TradePost extends React.Component{
    render(){
        const name = this.props.name;
        return (
            <button class="trade">
                {name}
            </button>
        )
    }
}