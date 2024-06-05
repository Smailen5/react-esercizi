/* eslint-disable no-unused-vars */
import { useState } from "react";
import Gelato from "./Gelato";
// import axios from "axios";
import data from "../fakeData";

// const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
  const [prodotti, setProdotti] = useState(data);
  const [selected, setSelected] = useState(0);

  // Array per le categorie
  const categoria = Array.from(new Set(prodotti.map((el) => el.categoria)));

  // Filtro per categoria
  const filtroCategoria = (categoria) => {
    let newCategoria = prodotti.filter((el) => el.categoria == categoria);
    setProdotti(newCategoria);
  };

  // Ripopola array con i dati
  const reload = () => {
    setProdotti(data);
    setSelected(0);
  };

  console.log(selected);
  // console.log(index);

  return (
    <>
      <section className="w-11/12">
        <h3 className="text-center font-semibold uppercase my-4 tracking-wide">
          Le nostre scelte
        </h3>
        <nav className="flex justify-between uppercase text-xs grow">
          <button
            className={`uppercase ${
              selected === 0 ? "border-b-2 border-blue-400" : ""
            }`}
            onClick={reload}
          >
            All
          </button>
          {categoria.map((categoria, index) => {
            return (
              <button
                key={index + 1}
                // index + 1 per evitare conflitti con all
                className={`uppercase ${
                  index + 1 === selected && " border-b-2 border-blue-400"
                }`}
                onClick={() => {
                  setSelected(index + 1);
                }}
              >
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
      </section>
    </>
  );
};

export default Menu;
