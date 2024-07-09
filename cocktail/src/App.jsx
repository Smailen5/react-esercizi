/* eslint-disable no-unused-vars */
// import { Navbar, Sidebar, Footer } from "./components";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomeScreen from "./screen/HomeScreen";
// import AboutScreen from "./screen/AboutScreen";
// import ContactScreen from "./screen/ContactScreen";
// import SingleCocktailScreen from "./screen/SingleCocktailScreen";
// import ErrorScreen from "./screen/ErrorScreen";
/* eslint-disable no-unused-vars */
import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
// import { Footer, Navbar, Sidebar } from "./components";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
