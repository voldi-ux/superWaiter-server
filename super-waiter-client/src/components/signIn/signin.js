/** @format */

import React, { useState } from "react";
import { axiosPost } from "../../axios/axios";
import Loader from "../loader/loader";
import "./signin.css";

const SignInComponent = () => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [err, setErr] = useState(null);
 
  const handleSubmit = async () => {
    setLoading(true)
    const res = await axiosPost("/dashboard/sign-in", credentials);
    if (res.msg || res.err) {
      setErr(res.msg || res.err);
      setLoading(false)
    } else {
      setTimeout(() => {
        // save user to context and session storage
        sessionStorage.setItem("super-waiter-user", JSON.stringify(res));
        window.location.reload()
      }, 3000);

    }
  };


  const handleChange = (event) => {
    setCredentials((prev) => {
      prev[event.target.name] = +event.target.value;
      return prev;
    });
  };

  return (
    <div className="signin-container">
      <div className="sigin-container-inner">
        <img src={require("../../assets/images/logo-small.png")} alt="super waiter logo " />
        <input onChange={handleChange} name="pin" type={"password"} placeholder="pin" />
        <input onChange={handleChange} name="passcode" type={"password"} placeholder="passcode" />
        <button onClick={handleSubmit}>{loading ? <Loader style={{width:'3rem',height:'3rem'}}/> : 'sign in' }</button>
        <p>Use the credentials that were given to you. Contact 0629114175 or email superwaiter@gmail.com if you are facing any challenges.</p>
      </div>
    </div>
  );
};

export default SignInComponent;
