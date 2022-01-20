import React from 'react';
import './productsNav.css';


const ProductsNav = () => {
  const handleClick = (e) => {
    const doc = document.querySelector('.category.active')
    if (doc) {
       doc.classList.remove('active')
    }
    e.target.classList.add('active')
  }
    return (
      <nav className="products-nav-container">
        <ul className="products-nav-container-filters">
          <li className="category active" onClick={handleClick}>
            all
          </li>
          <li className="category" onClick={handleClick}>
            Main
          </li>
          <li className="category" onClick={handleClick}>
            Drinks
          </li>
          <li className="category" onClick={handleClick}>
            Desserts
          </li>
          <li className="category" onClick={handleClick}>
            Salads
          </li>
        </ul>
        <input className="search shadow-2" placeholder="search products " />
      </nav>
    );
};


export default ProductsNav;