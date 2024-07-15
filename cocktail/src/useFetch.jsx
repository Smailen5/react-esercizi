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

  useEffect(() => {
    (async (query) => {
      setIsError(false);
      setIsLoading(false);
      try {
        const response = await axios.get(`${url}${query}`);
        setData(response.data);
        setCount(response.data.drinks);
        console.log(response);
      } catch (error) {
        setIsError(true);
        setCount(0);
      }
    })(query);
  }, [url, query]);
  return {
    isLoading,
    data,
    count,
    isError,
  };
};

export default useFetch;
