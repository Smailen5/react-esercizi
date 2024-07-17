import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `WikiCocktails - ${title}`;
  }, [title]);
};

export default useTitle;