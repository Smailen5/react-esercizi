// import { Navbar, Sidebar, Footer } from "./components";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomeScreen from "./screen/HomeScreen";
// import AboutScreen from "./screen/AboutScreen";
// import ContactScreen from "./screen/ContactScreen";
// import SingleCocktailScreen from "./screen/SingleCocktailScreen";
// import ErrorScreen from "./screen/ErrorScreen";
import {useGlobalContext} from "./context";

function App() {
  const prova = useGlobalContext()
  console.log(prova);
  return <div className="text-red-500">App</div>;
}

export default App;
