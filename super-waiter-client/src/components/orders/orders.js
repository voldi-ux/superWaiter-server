/** @format */

import React, { useState, useContext, useEffect } from "react";
import { axiosPost } from "../../axios/axios";
import { AppContext } from "../../context/appContext";
import ButtonPrimary from "../buttons/buttonPrimary";
import List from "../listComponent/list";
import "./orders.css";

const Orders = () => {
  const [selectedOrder, setOrder] = useState(null);
  const { orders, user, setUpdatedOrder } = useContext(AppContext);
  let renderItems;

  useEffect(async () => {
    if (selectedOrder && selectedOrder.new === true) {
      const res = await axiosPost("/dashboard/update-order-item", { token: user.token, order: { ...selectedOrder }, type: "changeNewField" });
      if (res.msg || res.err) return;
      setUpdatedOrder(res);
    }
  }, [selectedOrder]);

  const handleButtonClick = async (status) => {
    const res = await axiosPost("/dashboard/update-order-item", { token: user.token, order: { ...selectedOrder, status }, type: "updateStatus" });
    if (res.msg || res.err) return;

    setUpdatedOrder(res);
    setOrder(res);

  };

  if (selectedOrder) {
    renderItems = selectedOrder.items.map((item) => (
      <div className="order-item" key={item.name}>
        <p>{item.name}</p> <h2>1 x {item.qty}</h2>
      </div>
    ));
  }

  return (
    <div className="orders-container">
      <List list={orders} setItem={setOrder} />
      {selectedOrder ? (
        <main>
          <section className="orders-details orders-details-left">
            <h1>Customer Info & Address</h1>
            <h2>{selectedOrder.customerInfo.email}</h2>
            <h2>{selectedOrder.customerInfo.phone}</h2>
            <h2>Johannesburg</h2>
            <h2>{selectedOrder.customerInfo.postalCode}</h2>
            <h2>{selectedOrder.customerInfo.street}</h2>
            <h1>Instructions</h1>
            <p>{selectedOrder.instruction ? selectedOrder.instruction : "no instructions for this order"}</p>
          </section>

          <section className="orders-details orders-details-right">
            <div className="orders-details-headings">
              <h1>Items</h1>
              <h1>R {selectedOrder.total}.00</h1>
            </div>

            {renderItems}

            <h1>Update Status</h1>
            <ButtonPrimary outline={true} onClick={() => handleButtonClick("preparing")} title={"Preparing"} clicked={selectedOrder.status.toLowerCase() === "preparing" && "btn-clicked"} />
            <ButtonPrimary outline={true} onClick={() => handleButtonClick("delivering")} title={"Delivering"} clicked={selectedOrder.status.toLowerCase() === "delivering" && "btn-clicked"} />
          </section>
        </main>
      ) : (
        <div className="chef-container">
          <img src={require("../../assets/images/chef.png")} alt="chef " />
          <h1>Click on the orders to your right to start accepting orders and changing their status.</h1>
        </div>
      )}
    </div>
  );
};

export default Orders;
