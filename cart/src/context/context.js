import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import {
  ADD_QTY,
  DELETE_CART,
  DELETE_PRODUCT,
  FETCH_PRODUCTS_ERROR,
  FETCH_PRODUCTS_STARTED,
  FETCH_PRODUCTS_SUCCESS,
  ITEM_QTY,
  REMOVE_QTY,
  TOTAL_COST,
} from "./actions";
import reducer from "./reducer";
const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

const initialState = {
  isLoading: false,
  isError: false,
  cartProducts: [],
  totalPrice: 0,
  amountItem: 3,
  amountItemCart: 0,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  // useReducer stato iniziale
  const [state, dispatch] = useReducer(reducer, initialState);
  //   console.log(state)

  // elimina un prodotto
  const deleteProduct = (id) => {
    dispatch({ type: DELETE_PRODUCT, payload: id });
  };
  // svuota il carrello
  const deleteCart = () => {
    dispatch({ type: DELETE_CART });
  };
  // aggiunge un prodotto al carrello
  const addQty = (id) => {
    dispatch({ type: ADD_QTY, payload: id });
    console.log(state);
  };
  // rimuove un prodotto dal carrello
  const removeQty = (id) => {
    dispatch({ type: REMOVE_QTY, payload: id });
  };
  // calcola il totale della spesa e aggiorna la quantità di oggetti nel carrello
  useEffect(() => {
    dispatch({ type: TOTAL_COST });
    dispatch({ type: ITEM_QTY });
  }, [state.cartProducts]);
  // recupera i dati dalla API utilizzando axios e reducer
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
    <AppContext.Provider
      value={{ ...state, deleteCart, deleteProduct, addQty, removeQty }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
