/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Gelato from "./Gelato";
import axios from "axios";
// import data from "../fakeData";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
  // Salvo i dati qui dentro per poterli recuperare senza fare chiamate continue alla API
  const [prodotti, setProdotti] = useState([]);
  // anche se all e all'indice 0 se non viene settato a 1 ci sono problemi
  // EDIT: corretto
  const [selected, setSelected] = useState(0);
  const [filtroProdotti, setFiltroProdotti] = useState(prodotti);

  // Array per le categorie
  const categoria = Array.from(new Set(prodotti.map((el) => el.categoria)));
  categoria.unshift("all");

  // Filtro per categoria
  const filtroCategoria = (index, categoria) => {
    setSelected(index);
    if (categoria === "all") {
      setFiltroProdotti(prodotti);
    } else {
      setFiltroProdotti(
        prodotti.filter((el) => (el.categoria === categoria ? el : ""))
      );
    }
  };

  // Chiamata alla API
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setProdotti(response.data.data);
      setFiltroProdotti(response.data.data);
    } catch (error) {
      console.log("Errore nel caricamento dei dati: ", error);
    }
  };

  // Carico i dati solo una volta al render del componente
  useEffect(() => {
    getData();
  }, []);

  // Ripopola array con i dati
  // EDIT: non serve piu, viene gestito da filtroCategoria
  // const reload = () => {
  //   setProdotti(data);
  //   setSelected(0);
  // };

  console.log(prodotti);
  // console.log(categoria);

  return (
    <>
      <section className="w-11/12">
        <h3 className="text-center font-semibold uppercase my-4 tracking-wide">
          Le nostre scelte
        </h3>
        <nav className="flex justify-between gap-x-6 uppercase text-xs grow">
          {/* Map su categoria che deriva da prodotti, in questo modo i bottoni non cambiano */}
          {categoria.map((categoria, index) => {
            return (
              <button
                key={index}
                className={`uppercase w-full pb-1 ${
                  index === selected && " border-b-2 border-blue-400 font-bold"
                }`}
                onClick={() => {
                  setSelected(index);
                  filtroCategoria(index, categoria);
                }}
              >
                {categoria}
              </button>
            );
          })}
        </nav>
        <hr className="my-4 border-neutral-400" />
        <section className="flex gap-4 flex-col items-center ">
          {/* filtroProdotti anziche prodotti, in questo modo prendo i dati del filtro 
          senza toccare l'array prodotti */}
          {filtroProdotti.map((el) => (
            <Gelato key={el.id} {...el} />
          ))}
        </section>
      </section>
    </>
  );
};

export default Menu;
