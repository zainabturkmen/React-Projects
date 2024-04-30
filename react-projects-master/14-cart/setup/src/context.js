import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://www.course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initailState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initailState);

  const clearCart = () => {
    dispatch({type: "CLEAR_CART"})
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  }



  const increase = (id) => {
    dispatch({type: "INCREASE", payload: id})
  }

  const decrease = (id) => {
    dispatch({type: "DECREASE", payload: id})
  }

  const fetchData = () => {
    dispatch({type: ""})
  }

  useEffect(() => {
    dispatch({type: "GET_TATALS"})
  },[state.cart])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
