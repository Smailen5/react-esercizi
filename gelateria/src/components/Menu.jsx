/* eslint-disable no-unused-vars */
import { useState } from "react";
import Gelato from "./Gelato";
// import axios from "axios";
import data from "../fakeData";

// const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
  const [prodotti, setProdotti] = useState(data);

  // Array per le categorie
  const categoria = Array.from(new Set(prodotti.map((el) => el.categoria)));

  // Filtro per categoria
  const filtroCategoria = (categoria) => {
    let newCategoria = prodotti.filter((el) => el.categoria == categoria);
    setProdotti(newCategoria);
  };
  // Categoria selezionata
  const selected = (e) => {
    console.log(e.focus);
  };

  // Ripopola array con i dati
  const reload = () => {
    setProdotti(data);
  };

  console.log(prodotti);
  // console.log(categoria);

  return (
    <>
      <section className="w-11/12">
        <h3 className="text-center font-semibold uppercase my-4 tracking-wide">
          Le nostre scelte
        </h3>
        <nav className="flex justify-between uppercase text-xs grow">
          <button className="uppercase" onClick={reload}>
            All
          </button>
          {categoria.map((categoria, index) => {
            return (
              <button key={index} className="uppercase " onClick={selected}>
                {categoria}
              </button>
            );
          })}
        </nav>
        <hr className="my-4 border-neutral-400" />
        <section className="flex gap-4 flex-col items-center ">
          {prodotti.map((el) => (
            <Gelato key={el.id} {...el} />
          ))}
        </section>
        {/* <Gelato gelati={prodotti} /> */}
      </section>
    </>
  );
};

export default Menu;
