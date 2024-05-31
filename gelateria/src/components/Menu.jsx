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
      <section className="w-11/12">
        <h3 className="text-center font-semibold uppercase my-4 tracking-wide">
          Le nostre scelte
        </h3>
        <div className="flex justify-between uppercase text-xs grow">
          <button className=" grow text-center uppercase ">
            {/* group --- il gruppo che ascolta l'evento per la barra sotto --- attenzione uppercase sull'elemento padre non influisce su questo */}
            all
            <div className=" w-11/12 h-0.5 bg-sky-500 rounded my-1"></div>
            {/* group-active:bg-sky-500 --- per attivare la barra sotto */}
          </button>
          <div className=" active:text-red-500 grow text-center">cono</div>
          <div className=" active:text-red-500 grow text-center">coppetta</div>
          <div className=" active:text-red-500 grow text-center">stick</div>
        </div>
        <hr className="my-4 border-neutral-400" />
        <Gelato gelati={gelati} />
      </section>
    </>
  );
};

export default Menu;
