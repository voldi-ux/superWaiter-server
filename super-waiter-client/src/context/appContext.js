/** @format */

import React, {useReducer, createContext } from "react";
import { replaceItem, toggleSelect, toggleSelectAll } from "./utils";
export const AppContext = createContext();

const initAppState = {
  products: [],
  users: [],
  logs: [],
  issues: [],
  user: null,
  selectedUsers:[]
};



const appReducer = (state, action) => {
    if (action.type === "set_user") {
      return { ...state, user: action.payload };
    } else if (action.type === "set_data") {
      return { ...state, ...action.payload };
    } else if (action.type === "sign_out") {
      sessionStorage.removeItem("super-waiter-server");
      return { ...state, products: [], users: [], logs: [], issues: [], user: null };
    } else if (action.type === "update_item") {
      return { ...state, products: replaceItem(state.products, action.payload) };
    } else if (action.type === "update_order") {
      return { ...state, orders: replaceItem(state.orders, action.payload) };
    } else if (action.type === "toggle_select_user") {
      return { ...state, selectedUsers: toggleSelect(action.payload, state.selectedUsers) };
    } else if (action.type === "toggle_select_user_all") {
      return {...state,selectedUsers:toggleSelectAll(state.users,state.selectedUsers)}
    } else return state;
};


const AppContextWrapper = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initAppState);

  const setUser = (user) => dispatch({ type: "set_user", payload: user });
  const setData = (data) => dispatch({ type: "set_data", payload: data });
  const signOut = (data) => dispatch({ type: "sign_out", payload: data });



  //products actions
  const setUpdatedProduct = (item) => dispatch({ type: "update_item", payload: item });

  //orders actions
  const setUpdatedOrder = (item) => dispatch({ type: "update_order", payload: item });


  //mail acitons
  const toggleSelectUser = (user) => dispatch({type:"toggle_select_user", payload:user})
  const toggleSelectUserAll = () => dispatch({ type: "toggle_select_user_all" })
  
  return (
    <AppContext.Provider
      value={{
        ...state,
        setUser,
        setData,
        signOut,
        setUpdatedProduct,
        setUpdatedOrder,
        toggleSelectUser,
        toggleSelectUserAll
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextWrapper;
