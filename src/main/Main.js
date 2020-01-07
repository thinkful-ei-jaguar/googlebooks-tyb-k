import React from 'react';
import Search from '../search/Search';
import Results from '../results/Results';
import Filter from '../filter/Filter';
import main from './main.css';

function Main () {

    return <main>
        <Search />
        <Filter />
        <Results />
        <p>hello darkness my old friend</p>
    </main>
}

export default Main