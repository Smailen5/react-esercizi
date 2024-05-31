/* eslint-disable no-unused-vars */
import { useState } from "react";
import Gelato from "./Gelato";
// import axios from "axios";
import data from "../fakeData";

// const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
  const [gelati, setGelati] = useState(data);

  return (
    <>
      <div className="container">MENU</div>
      
        <Gelato gelati={gelati} />
      
    </>
  );
};

export default Menu;
