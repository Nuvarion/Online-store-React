import React from 'react';

import ProductItem from './Product-item'
import Pagination from './Pagination';
import data from './data';

import './Products.css';


const newArr = data.map((item) => {
    
    return (
        <ProductItem imgSrc={item.img}
                    priceItem={item.price}
                    key={item.id}/>
    );
});

const Products = () => {
    return (
        <div className="container pt-3">
            <section className="text-center mb-4">
                <div className="row fadeIn">
                    {newArr}
                </div>
            </section>
            <Pagination />
        </div>
        
    )
}

export default Products;