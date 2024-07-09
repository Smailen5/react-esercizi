// import { Navbar, Sidebar, Footer } from "./components";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomeScreen from "./screen/HomeScreen";
// import AboutScreen from "./screen/AboutScreen";
// import ContactScreen from "./screen/ContactScreen";
// import SingleCocktailScreen from "./screen/SingleCocktailScreen";
// import ErrorScreen from "./screen/ErrorScreen";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import {useGlobalContext} from "./context";

function App() {
  const prova = useGlobalContext()
  console.log(prova);
  return <RouterProvider router={router} />
}

export default App;
