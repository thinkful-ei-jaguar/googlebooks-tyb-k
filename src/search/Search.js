import React from 'react';

function Search (props) {
    return <>
        <form id="booksearch" onSubmit={e => props.submitSearch(e)}>
            <label htmlFor="search">Search: </label>
            <input type="text" placeholder="search book titles here" id="bookfinder"></input>
            <button>Submit</button>
        </form>
        </>
}

export default Search