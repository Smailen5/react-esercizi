/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const { data } = useFetch("i=11003", true);

  // Altri stati o variabili di stato necessari
  // const [altroStato, setAltroStato] = useState(valoreIniziale);

  return (
    <AppContext.Provider value="prova context">{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
