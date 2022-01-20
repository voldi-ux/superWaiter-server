import React from 'react';
import BgOverlay from '../bgOverlay/bgOverlay';
import ButtonPrimary from '../buttons/buttonPrimary';
import List from '../listComponent/list';
import './orders.css';


const Orders = () => {


  const handleButtonClick = (e) => {
    const doc = document.querySelector(".btn-clicked");
    if (doc) {
      doc.classList.remove("btn-clicked");
    }
    e.target.classList.add("btn-clicked");
  }
    return (
      <div className="orders-container">
    
        <main>
          <section className="orders-details orders-details-left">
            <h1>Customer Info & Address</h1>
            <h2>voldimuyumba@gmail.com</h2>
            <h2>0638993907</h2>
            <h2>Johannesburg</h2>
            <h2>2984</h2>
            <h2>Yeo street</h2>
            <h1>Instructions</h1>
            <p>
              "lo adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul
            </p>
          </section>

          <section className="orders-details orders-details-right">
            <div className="orders-details-headings">
              <h1>Items</h1>
              <h1>R 560.00</h1>
            </div>
            <div className='order-item'>
              <p>Roasted Chicken</p> <h2>1 x 4</h2>
            </div>
            <div className='order-item'>
              <p>Roasted Chicken</p> <h2>1 x 4</h2>
            </div>
            <div className='order-item'>
              <p>Roasted Chicken</p> <h2>1 x 4</h2>
            </div>

            <h1>
              Update Status
            </h1>
            <ButtonPrimary outline={true} onClick={handleButtonClick} title={'Preparing'}/>
            <ButtonPrimary outline={true} onClick={handleButtonClick} title={'Delivering'}/>
          </section>
        </main>
      </div>
    );
}


export default Orders;