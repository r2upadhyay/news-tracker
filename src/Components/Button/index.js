import React from 'react';
import './styles.scss'

const Button = (props) => {
    let attributes = Object.assign({}, props);
    delete attributes.children;


    return (
        <button className="button"
            {...attributes}>Search</button>
    )
}

export default Button;