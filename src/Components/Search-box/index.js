import React from 'react';
import './styles.scss'

const SearchBox = (props) => {
    let attributes = Object.assign({}, props);
    delete attributes.children;

    return (
        <input type="text" className="search-box" {...attributes}/>
    )
}

export default SearchBox;