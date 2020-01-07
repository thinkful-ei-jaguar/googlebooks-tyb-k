import React, { Component } from  'react';
import Search from '../search/Search';
import Results from '../results/Results';
import Filter from '../filter/Filter';
import main from './main.css';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kind: "",
            totalItems: 0,
            items: [
                {
                    volumeInfo: {
                        title: "",
                        authors: [],
                        description: ""    
                    },
                    saleInfo: {
                        listPrice: {
                            amount: 0,
                        }
                    }
                }
            ]
        }
    }

    submitSearch = (e) => {
        e.preventDefault();
        console.log("Oh look a search!");
    }

    render () {
        return (<main>
            <Search 
                submitSearch={this.submitSearch}
            />
            <Filter />
            <Results 
                books={this.state.items}
            />
        </main>)
    }
}

export default Main