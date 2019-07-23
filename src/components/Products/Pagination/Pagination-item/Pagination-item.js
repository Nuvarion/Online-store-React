import React from 'react';

import './Pagination-item.css';



const PaginationItem = ({pageNumber, active, onItemClick}) => {
    
    return (
                <li className={`page-item ${active ? 'active' : ''}`}>
                    <button onClick={onItemClick} className="page-link" aria-label="Previous">
                      <span aria-hidden="true">{pageNumber}</span>
                    </button>
                </li>
                
    )
};

export default PaginationItem;