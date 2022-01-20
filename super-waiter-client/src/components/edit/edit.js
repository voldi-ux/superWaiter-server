import React from 'react';
import Switch from '../switch/swtich';
import './edit.css';


const Edit = ({ item }) => { 
    const closeEditComp = () => {
      const editComp = document.querySelector(".edit-container");
      editComp.style.transform = "translateY(-100%)";
}
    return (
      <main className="edit-container">
        <div className="edit-arrow-container">
          <span></span>
          <span className="edit-arrow" onClick={closeEditComp}>
            &#8593;
          </span>
        </div>
        <div className="edit-container-inner">
          <form className="edit-form">
            <input placeholder="name of product" className="edit-input" />
            <input placeholder="price of product" type={"number"} className="edit-input" />
            <div className="hot">
              <h1>Hot</h1> <Switch on={""} />
            </div>
            <textarea placeholder="Description of product" />
            <button>save</button>
          </form>
          <div className="preview">
            <h1>Preview</h1>
            <img className="preview-img" src={require("../../assets/images/beef-salad.png")} alt="preveiew image" />
            <div className="preview-name-price">
              <h1>Beff salad</h1>
              <h1>R 49.00</h1>
            </div>
              <p className="preview-description">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
          </div>
        </div>
      </main>
    );
};


export default Edit;