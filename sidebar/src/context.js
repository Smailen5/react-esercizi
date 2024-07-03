import { useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value="ciao da AppProvider">
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
