import React from 'react';

import './App-header-item.css';



const AppHeaderItem = ({active, title, onItemClick}) => {

    return (
        <li onClick={ onItemClick } className={`nav-item ${active ? 'active' : ''}`}>
            <span href="index.html" className="nav-link">{title}</span>
        </li>
    )
};

export default AppHeaderItem;