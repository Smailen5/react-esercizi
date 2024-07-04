/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";
// import {} from "actions";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value='context'>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
