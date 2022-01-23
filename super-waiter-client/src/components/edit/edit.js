import React, { useState} from 'react';
import { baseUrl } from '../../axios/axios';
import Switch from '../switch/swtich';
import './edit.css';


const Edit = ({ item,updateItem,...props }) => { 
    const closeEditComp = () => {
     updateItem(null)
  }

  const handleChange = (e) => {
    updateItem((prev) => { 
      const newState = { ...prev }
      newState[e.target.name] = e.target.value
      return newState
    })
  }
  
    return (
      <main className="edit-container" {...props}>
        {item ? (
          <>
            <div className="edit-arrow-container">
              <span></span>
              <span className="edit-arrow" onClick={closeEditComp}>
                &#8593;
              </span>
            </div>
            <div className="edit-container-inner">
              <form className="edit-form">
                <input  onChange={handleChange} placeholder="name of product"  name='name' className="edit-input" value={item.name} />
                <input  onChange={handleChange} placeholder="price of product" name='price' type={"number"} className="edit-input" value={item.price} />
                <div className="hot">
                  <h1>Hot</h1> <Switch on={item.hot} toggle={updateItem}/>
                </div>
                <textarea  onChange={handleChange} placeholder="Description of product"  name='description' value={item.description} />
                <button>save</button>
              </form>
              <div className="preview">
                <h1>Preview</h1>
                <img className="preview-img" src={`${baseUrl}${item.imagePath} `} alt="preveiew image" />
                <div className="preview-name-price">
                  <h1>{item.name}</h1>
                  <h1>R {item.price}.00</h1>
                </div>
                <p className="preview-description">{item.description} </p>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </main>
    );
};


export default Edit;