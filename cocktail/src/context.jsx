/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("negroni");
  const { data, isLoading, isError, count } = useFetch(`s=${query}`);
  const [scrollPosition, setScrollPosition] = useState(0);

  const searchCocktail = (input) => {
    setQuery(input);
  };

  const getScrollPosition = (value) => {
    setScrollPosition(value);
  };

  const deleteScrollPosition = (value) => {
    setScrollPosition(0);
  };
  // Altri stati o variabili di stato necessari
  // const [altroStato, setAltroStato] = useState(valoreIniziale);

  return (
    <AppContext.Provider
      value={{
        searchCocktail,
        data,
        isLoading,
        isError,
        count,
        query,
        getScrollPosition,
        deleteScrollPosition,
        scrollPosition
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider, useGlobalContext };
