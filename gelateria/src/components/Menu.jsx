import { useEffect, useState } from "react";
import Gelato from "./Gelato";
import axios from "axios";
// import data from "../fakeData";

const url = "https://react--course-api.herokuapp.com/api/v1/data/gelateria";

const Menu = () => {
  // Tutti i prodotti
  const [prodotti, setProdotti] = useState([]);

  // Bottone selezionato
  const [selected, setSelected] = useState(0);

  // Prodotti filtrati dallo state prodotti
  const [filtroProdotti, setFiltroProdotti] = useState(prodotti);

  // Stato per il caricamento
  const [isLoading, setIsLoading] = useState(true);

  // Stato di errore
  const [isError, setIsError] = useState(false);

  // Categorie dei prodotti per i bottoni
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
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await axios.get(url);
      setProdotti(response.data.data);

      // questo timer esiste solo per mostrare la schermata di caricamento dei gelati
      const timer = setTimeout(() => {
        setFiltroProdotti(response.data.data),
          setIsLoading(false),
          setIsError(false);
      }, 2000);
      return () => clearTimeout(timer);
    } catch (error) {
      console.log("Errore nel caricamento dei dati: ", error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  // Caricamento dati al primo render del componente
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="w-11/12">
        <h3 className="text-center font-semibold uppercase my-4 tracking-wide lg:text-2xl">
          Le nostre scelte
        </h3>

        <nav className="flex justify-between gap-x-6 uppercase text-xs grow lg:text-sm">
          {categoria.map((index, categoria) => {
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

        {!isLoading && !isError ? (
          <section className="flex gap-4 flex-col items-center md:grid md:grid-cols-2 2xl:gap-8">
            {filtroProdotti.map((el) => (
              <Gelato key={el.id} {...el} />
            ))}
          </section>
        ) : !isLoading && isError ? (
          <section className=" bg-red-500 rounded w-full p-10 animate-pulse mx-auto">
            <p className="text-center text-xl font-bold">
              Errore nel caricamento, controlla la console o ricarica la pagina
            </p>
          </section>
        ) : (
          <section className=" bg-sky-100 rounded w-full p-10 animate-pulse mx-auto">
            <p className="text-center text-xl">Gelati in arrivo 🍧...</p>
          </section>
        )}
      </section>
    </>
  );
};

export default Menu;
