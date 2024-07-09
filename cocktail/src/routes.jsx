import { createBrowserRouter } from "react-router-dom";
import Home from "./screen/HomeScreen";

export const router = createBrowserRouter([
    {path: '/',
    element: <Home />}
])