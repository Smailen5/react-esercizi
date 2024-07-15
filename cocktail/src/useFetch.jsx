import { useState, useEffect } from "react";
import axios from "axios";

const serchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const useFetch = (query, type = false) => {
  const url = type ? singleUrl : serchUrl;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);

  console.log("fetch chiamato");
  console.log(data);
  console.log(count);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}${query}`);
        if (response.data && response.data.drinks) {
          setData(response.data.drinks);
          setCount(response.data.drinks.length);
          console.log("Dati ricevuti", response.data.drinks);
        } else {
          setData([]);
          setCount(0);
          console.log("non ci sono dati");
        }
      } catch (error) {
        setIsError(true);
        console.error("Errore durante il fetch:", error);
        setData([]);
        setCount(0);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url, query]);
  return {
    isLoading,
    data,
    count,
    isError,
  };
};

export default useFetch;
