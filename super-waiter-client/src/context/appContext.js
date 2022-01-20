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
    } else return state;
};


const AppContextWrapper = ({ children }) => {
  const [state, disptach] = useReducer(appReducer, initAppState);

  const setUser = (user) => disptach({ type: "set_user", payload: user });

  return (
    <AppContext.Provider
      value={{
        ...state,
        setUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextWrapper;
