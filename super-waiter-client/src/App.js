/** @format */

import React, { useState, useEffect, useContext } from "react";
import { io } from "socket.io-client";

import "./App.css";
import Overlay from "./components/overlay/overlay";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import BgOverlay from "./components/bgOverlay/bgOverlay";
import Orders from "./components/orders/orders";
import Stats from "./components/stats/stats";
import Products from "./components/products/products";
import Mail from "./components/mail/mail";
import Issues from "./components/issues/issues";
import Logs from "./components/logs/Logs";
import SignInComponent from "./components/signIn/signin";
import AppContextWrapper, { AppContext } from "./context/appContext";
import { axiosGet, axiosPost, baseUrl } from "./axios/axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState("products");
  const { user, setUser, setData, addOrder } = useContext(AppContext);

  const mainComponents = {
    orders: <Orders />,
    stats: <Stats />,
    products: <Products />,
    mail: <Mail />,
    issues: <Issues />,
    logs: <Logs />
  }[activeComponent];

  const bgColor = {
    orders: "#707070",
    stats: "#f7941d",
    products: "#1f8d7e",
    mail: "#0f7f87",
    issues: "#ff633e",
    logs: "#d41952"
  }[activeComponent];

  useEffect(async () => {
    const savedUser = await JSON.parse(sessionStorage.getItem("super-waiter-user"));
    if (savedUser && user === null) {
      setUser(savedUser);
    }
  }, []);

  useEffect(async () => {
    //get products from the database;
    if (user) {
      const res = await axiosPost("/dashboard/get-admin-data", { token: user.token });
      if (!res.err || !res.msg) {
        setData(res);
      }
    }
    setLoading(false);
  }, [user]);

  useEffect(() => {
    let socket;
    const savedUser = JSON.parse(sessionStorage.getItem("super-waiter-user"));

    if (savedUser) {
      socket = io(`${baseUrl}/orders`);
      socket.on("connect", () => {
        console.log(socket);
        socket.emit("join-room", { room: "admin" });
        socket.on("order-created", (order) => {
          addOrder(order);
        });
      });
    }
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  if (loading) {
    return (
      <div>
        <Overlay />
      </div>
    );
  } else if (!user) {
    return <SignInComponent />;
  } else {
    return (
      <div className="app-container ">
        <BgOverlay bgColor={bgColor} />
        <main className="app-container-inner ">
          <Navbar />
          <div className="main-content">
            <Sidebar setActiveComponent={setActiveComponent} />
            {mainComponents}
          </div>
        </main>
      </div>
    );
  }
}

function AppWrapper() {
  return (
    <AppContextWrapper>
      <App />
    </AppContextWrapper>
  );
}

export default AppWrapper;
