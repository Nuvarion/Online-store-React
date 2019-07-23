import React, { Component } from 'react';

import PaginationItem from './Pagination-item';
import dataNumber from './data-number';

import './Pagination.css';



export default class Pagination extends Component {

    state = {
      activeNumber: 1
    };

    getItems = (activeNum) => {
      const newDataNumbers = dataNumber.map((item, idx) => {
        return (
            <PaginationItem pageNumber={ item }
                            key={ idx }
                            active={ activeNum === item }
                            onItemClick={ () => this.onItemClick(item) }
                             />
        );
      });

      return newDataNumbers
    };

    onItemClick = (num) => {
      this.setState({
        activeNumber: num
      })
    };

    render() {
        return (
            <div className="d-flex justify-content-center fadeIn">
              <ul className="pagination pg-blue" id="pagination">
                <li className="page-item">
                  <button href="" className="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </button>
                </li>
                {this.getItems(this.state.activeNumber)}
                <li id="list" className="page-item">
                    <button href="" className="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
              </ul>
            </div>
        )
    }
    
}
