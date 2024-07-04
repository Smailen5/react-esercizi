/* eslint-disable no-unused-vars */
import { ADD_TO_CART, PROVA } from "./actions";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

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

  if (state.isLoading) {
    console.log(`e cambiato in ${state.isLoading}`);
  } else {
    console.log(`e cambiato in ${state.isLoading}`);
  }

  const provaReducer = () => {
    dispatch({ type: PROVA });
  };

  return (
    <AppContext.Provider value={{ ...state, provaReducer }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
