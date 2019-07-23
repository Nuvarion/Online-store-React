import React from 'react';

import './Product-item';

const ProductItem = ({imgSrc, priceItem}) => {

    return (
        <div className="col-lg-3 col-md-6 mb-4">
                <div className="card">
                    <div className="view overlay">
                      <img className="card-img-top" src={imgSrc} alt="T-shirt" />
                      <a href="/">
                        <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
      
                    <div className="card-body text-center">
                      <a href="/" className="grey-text">
                        <h5>T-shirt</h5>
                      </a>
                      <h5>
                        <strong>
                          <span className="dark-grey-text">Women's t-shirt
                            <span className="badge badge-pill danger-color">New</span></span>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>{ priceItem }$</strong>
                      </h4>
                    </div>
                </div>
        </div>
    )
};

export default ProductItem;