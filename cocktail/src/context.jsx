/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="prova da context">
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
