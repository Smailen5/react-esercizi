import { useState, useContext, createContext } from "react";
import useFetch from "./useFetch";
import PropTypes from "prop-types";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("negroni");
  const { data, isLoading, isError, count } = useFetch(`s=${query}`);

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

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { AppContext, AppProvider, useGlobalContext };
