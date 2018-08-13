import React from 'react';
import TradeService from './Service/TradeService';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchResults: []
        }

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tradeService = new TradeService();
    }

    onSearchInputChange(event){
        this.setState({
            searchText: event.target.value
        });
        console.log(this.state.searchText);
    }

    consoleLog(data){
        console.log(data);
    }
    
    handleSubmit(event) {
        alert('Search for the following product: ' + this.state.searchText);
        this.tradeService.createTrade(this.consoleLog);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search" value={this.state.searchText} onChange={this.onSearchInputChange}/> <br/>
            <input type="submit" value="Go" tabIndex="20"/>
            </form>
        )
    }
}