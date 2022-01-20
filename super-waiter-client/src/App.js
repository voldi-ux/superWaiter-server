/** @format */

import React, { useState, useEffect,useContext } from "react";
import Overlay from "./components/overlay/overlay";

import "./App.css";
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
import { use } from "bcrypt/promises";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeComponent, setActiveComponent] = useState("products");
  const {user,setUser} = useContext(AppContext)
 
  const mainComponents = {
    orders: <Orders />,
    stats: <Stats />,
    products: <Products />,
    mail: <Mail />,
    issues: <Issues />,
    logs: <Logs />
  };

  const bgColor = {
    orders: "#707070",
    stats: "#f7941d",
    products: "#1f8d7e",
    mail: "#0f7f87",
    issues: "#ff633e",
    logs: "#d41952"
  };

  useEffect(async () => {
    const savedUser =  await JSON.parse(sessionStorage.getItem("super-waiter-user"));
    if (savedUser) {
         setUser(savedUser)
       }
  }, [])
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);



  if (loading) {
    return (
      <div>
        <Overlay />
      </div>
    );
  } else if (!user) {
     return <SignInComponent />
  } else {
    return (
      <div className="app-container ">
        <BgOverlay bgColor={bgColor[activeComponent]} />
        <main className="app-container-inner ">
          <Navbar />
          <div className="main-content">
            <Sidebar setActiveComponent={setActiveComponent} />
            {mainComponents[activeComponent]}
          </div>
        </main>
      </div>
    );
  }
}


function AppWrapper() {

  return <AppContextWrapper>
     <App />
  </AppContextWrapper>
}

export default AppWrapper;
