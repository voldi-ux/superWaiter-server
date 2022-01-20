import React from 'react';
import './product.css';


const Product = ({ item }) => {
    const handleClick = () => {
        const editComp = document.querySelector(".edit-container");
          editComp.style.transform = 'translateY(0)'
    }
    return (
      <div className="product-conatiner">
        <img src={require("../../assets/images/beef-salad.png")} alt='product image' className='product-image'/>
        <div className='product-name-price'>
          <h1>Beef salad</h1>
          <h1>R49.00</h1>
        </div>
            <p className="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
            <button className='product-button' onClick={handleClick}>
               edit
            </button>
      </div>
    );
};



export default Product;