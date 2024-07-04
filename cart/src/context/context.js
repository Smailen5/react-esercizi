/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
} from "./actions";
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
  // useReducer stato iniziale
  const [state, dispatch] = useReducer(reducer, initialState);
  // data fetching
  useEffect(() => {
    // IIFE Immediate Invoked Function Expression (espressione di funzione invocata immediatamente)
    (async () => {
      dispatch({ type: FETCH_PRODUCTS_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data.data });
      } catch (error) {
        dispatch({ type: FETCH_PRODUCTS_ERROR });
      }
    })();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
