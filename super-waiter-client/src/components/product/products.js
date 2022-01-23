import React,{memo} from 'react';
import { baseUrl } from '../../axios/axios';
import './product.css';


const Product = ({ item, setEditItem }) => {
  const handleClick = async () => {
    setEditItem(item)
  };
  console.log('I will re-render again and again')
  return (
    <div className="product-conatiner">
      <img src={`${baseUrl}${item.imagePath}`} alt="product image" className="product-image" />
      <div className="product-name-price">
        <h1>{item.name}</h1>
        <h1>R{item.price}.00</h1>
      </div>
      <p className="description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
      <button className="product-button" onClick={handleClick}>
        edit
      </button>
    </div>
  );
};



export default memo(Product);