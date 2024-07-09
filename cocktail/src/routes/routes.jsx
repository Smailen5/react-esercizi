import { createBrowserRouter } from "react-router-dom";
import About from "../screen/AboutScreen";
import Contact from "../screen/ContactScreen";
import Error from "../screen/ErrorScreen";
import Home from "../screen/HomeScreen";
import SingleCocktail from "../screen/SingleCocktailScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/singlecocktail/:id",
    element: <SingleCocktail />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
