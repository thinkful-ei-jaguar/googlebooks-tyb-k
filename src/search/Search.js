import React from 'react';

function Search (props) {
    return <>
        <form id="booksearch" onSubmit={props.submitSearch}>
            <label htmlFor="search">Search: </label>
            <input type="text" name="searchTerm" placeholder="search book titles here" id="bookfinder" required></input>
            <button>Submit</button>
        </form>
        </>
}

export default Search