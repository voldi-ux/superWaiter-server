/** @format */

import React, {useReducer, createContext } from "react";

export const AppContext = createContext();

const initAppState = {
  products: [],
  users: [],
  logs: [],
  issues: [],
  user: null
};

const appReducer = (state, action) => {
    if (action.type === "set_user") {
      return { ...state, user: action.payload };
    } else if (action.type === "set_data") {
      return { ...state, ...action.payload };
    } else if (action.type === "sign_out") {
      sessionStorage.removeItem('super-waiter-server')
      return { ...state, products: [], users: [], logs: [], issues: [], user: null };
    } else return state;
};


const AppContextWrapper = ({ children }) => {
  const [state, disptach] = useReducer(appReducer, initAppState);

  const setUser = (user) => disptach({ type: "set_user", payload: user });
  const setData = (data) => disptach({ type: "set_data", payload: data });
  const signOut = (data) => disptach({ type: "sign_out", payload: data });

  return (
    <AppContext.Provider
      value={{
        ...state,
        setUser,
        setData,
        signOut
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextWrapper;
