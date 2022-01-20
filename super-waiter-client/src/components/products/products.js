import React from 'react';
import BgOverlay from '../bgOverlay/bgOverlay';
import Edit from '../edit/edit';
import Product from '../product/products';
import ProductsNav from '../ProductsNav/productsNav';
import './products.css';



const Products = () => {
   
    return (
      <main className="products-container">
         
            <Edit />
            <ProductsNav />
            <div className='products-container-inner'>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
      </main>
    );
};


export default Products;