import axios from "axios";
import { useEffect, useState } from "react";

const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?";
const singleUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";

const useFetch = (query, type = false) => {
  const url = type ? singleUrl : searchUrl;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get(`${url}${query}`);
        if (response.data && response.data.drinks) {
          setData(response.data.drinks);
          setCount(response.data.drinks.length);
        } else {
          setData([]);
          setCount(0);
        }
      } catch (error) {
        setIsError(true);
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
