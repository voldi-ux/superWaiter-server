import React,{memo} from 'react';
import { baseUrl } from '../../axios/axios';
import './product.css';


const Product = ({ item, setEditItem }) => {
  const handleClick = async () => {
    setEditItem(item)
  };
  return (
    <div className="product-conatiner">
      <img src={`${baseUrl}${item.imagePath}`} alt="product image" className="product-image" />
      <div className="product-name-price">
        <h1>{item.name}</h1>
        <h1>R{item.price}.00</h1>
      </div>
      <p className="description">{item.description.slice(0,150)}...</p>
      <button className="product-button" onClick={handleClick}>
        edit
      </button>
    </div>
  );
};



export default memo(Product);