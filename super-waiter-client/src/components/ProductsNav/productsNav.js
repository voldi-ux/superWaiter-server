import React from 'react';
import './productsNav.css';


const ProductsNav = ({ setTerm, setCategory, category }) => {
  const handleClick = (e, category) => {
    const doc = document.querySelector(".category.active");
    if (doc) {
      doc.classList.remove("active");
    }
    e.target.classList.add("active");
    setCategory(category);
  };

  const handleChange = (e) => {
    if (e.target.value.length > 3) {
      setTerm(e.target.value.trim());
    } else {
      setTerm("");
    }
  };

  return (
    <nav className="products-nav-container">
      <ul className="products-nav-container-filters">
        <li className="category " onClick={(event) => handleClick(event, "all")}>
          all
        </li>
        <li className="category active" onClick={(event) => handleClick(event, "starters")}>
          Starters
        </li>
        <li className="category" onClick={(event) => handleClick(event, "main")}>
          Main
        </li>
        <li className="category" onClick={(event) => handleClick(event, "drinks")}>
          Drinks
        </li>
        <li className="category" onClick={(event) => handleClick(event, "desserts")}>
          Desserts
        </li>
        <li className="category" onClick={(event) => handleClick(event, "salads")}>
          Salads
        </li>
      </ul>
      <input className="search shadow-2" placeholder={category.toLowerCase() === "all" ? "search products in all categories" : `search products in ${category}`} onChange={handleChange} />
    </nav>
  );
};


export default ProductsNav;