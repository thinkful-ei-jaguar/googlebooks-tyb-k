import React, { Component } from  'react';
import Search from '../search/Search';
import Results from '../results/Results';
import Filter from '../filter/Filter';
import main from './main.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            error: null,
            loading: false
        }
    }

    submitSearch = (e) => {
        e.preventDefault();
        const baseUrl='https://www.googleapis.com/books/v1/volumes?q=';
        const searchUrl= `${baseUrl}${e.target.searchTerm.value}`
        this.setState({loading: true});
        fetch(searchUrl)
            .then(res => res.ok ? res.json(): Promise.reject('Something went wrong'))
            .then(items => {
                this.setState({
                books: items.items,
                loading: false
            })}
            )
            .catch(error => {
                this.setState({
                error: error,
                loading: false
                })
            })
            
            

    }

    render () {
        return (<main>
            <Search 
                submitSearch={this.submitSearch}
            />
            <Filter 
            />
            <ul>
                <Results 
                    books={this.state.books}
                    error={this.state.error}
                    loading={this.state.loading}
                />
            </ul>
        </main>)
    }
}

export default Main