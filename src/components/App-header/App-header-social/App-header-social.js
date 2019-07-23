import React from 'react';

import './App-header-social';

const AppHeaderSocial = ({social}) => {
    return (
        <li className="nav-item">
            <a href="/" className="nav-link">
            <i className={`fab fa-${social}`}></i>
            </a>
        </li>
    )
}

export default AppHeaderSocial;