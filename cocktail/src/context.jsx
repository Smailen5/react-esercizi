/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("negroni");
  const { data, isLoading, isError, count } = useFetch(`s=${query}`, true);

  const searchCocktail = (input) => {
    setQuery(input);
  };

  // Altri stati o variabili di stato necessari
  // const [altroStato, setAltroStato] = useState(valoreIniziale);

  return (
    <AppContext.Provider
      value={{ searchCocktail, data, isLoading, isError, count, query }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
