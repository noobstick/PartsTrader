import React from 'react';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchResults: []
        }

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSearchInputChange(event){
        this.setState({
            searchText: event.target.value
        });
        console.log(this.state.searchText);
    }
    
    handleSubmit(event) {
        alert('Search for the following product: ' + this.state.searchText);
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