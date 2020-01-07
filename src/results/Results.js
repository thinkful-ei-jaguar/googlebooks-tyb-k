import React from 'react';


function Results (props) {
    if (props.loading) {
        return <p>Loading...</p>
    }
    else if (props.error !== null) {
        return <p className="errorMessage">{props.error}</p>
    }
    else {
    return props.books.map(item => {
            return <li key={item.id}>
                        <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail: ''} alt={item.volumeInfo.title}></img>
                        <h3>{item.volumeInfo.title}</h3>
                        <h4>{item.volumeInfo.authors ? item.volumeInfo.authors.join(', '): "No Authors"}</h4>
                        <p>{item.volumeInfo.description}</p>
                        <h5>{item.saleInfo.listPrice ? item.saleInfo.listPrice.amount: "Not for Sale"}</h5>
                    </li>
        })
    }
}


export default Results
