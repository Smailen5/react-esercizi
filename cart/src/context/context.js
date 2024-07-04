/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";
// import {} from "actions";

const initialState = {
  isLoading: false,
  isError: false,
  cartProducts: [],
  totalPrice: 0,
  amountItem: 0,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
