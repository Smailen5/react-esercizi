import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {
  // contenitore di tutti i colori generati
  const [coloreGenerato, setColoreGenerato] = useState([]);
  // colore selezionato dal utente
  // const [coloreSelezionato, setColoreSelezionato] = useState({
  //   color: "",
  //   quantity: "",
  // });
  const [isError, setIsError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // React hook form, convalida form e espressione regolare
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // gestisce l'invio del form, controlla che tutti i campi di coloreSelezionato siano riempiti,

  const onSubmit = (data) => {
    const { color, quantity } = data;
    // e.preventDefault(); solo se non usi react hook form
    // if (coloreSelezionato.color && coloreSelezionato.quantity) {
    // const { color, quantity } = coloreSelezionato;
    setIsLoading(true);
    setIsError(false);
    try {
      // genera un array che poi va salvato in setColoreGenerato
      const colors = new Values(color).all(
        Math.round((100 / parseInt(quantity, 10)) * 2)
      ); // il problema delle 11 sfumature anziche 10 e colpa della libreria, si puo usare il metodo slice per avere la giusta quantita di sfumature
      const controllaColori = colors.slice(0, parseInt(quantity, 10)); // serve per correggere la quantita di sfumature visualizzate
      // setTimeout solo per avere un tempo di caricamento visibile ad occhio
      setTimeout(() => {
        // controllo se la lunghezza dell'array e quella selezionata dall'utente
        if (controllaColori.length == quantity) {
          setColoreGenerato(controllaColori);
          setIsLoading(false);
        }
      }, 2000);
    } catch (error) {
      setIsError(true);
      setMessageError(`oh-oh, ho trovato questo errore ${error.message}`);
      setIsLoading(false);
    }
    // } attenzione questa parentesi va con if
  };

  // aggiorna lo stato e salva i dati in coloreSelezionato
  // const selezionaColore = (e) => {
  //   const { name, value } = e.target;
  //   setColoreSelezionato({ ...coloreSelezionato, [name]: value });
  // };

  // solo per vedere se lo stato viene aggiornato correttamente
  // useEffect(() => {
  //   console.log(coloreSelezionato);
  // }, [coloreSelezionato]);

  return (
    <>
      {/* ci starebbe una bella convalida del form, minimo 3 lettere/numeri incluso '#', valori disponibili da a-f e da 0-9
    Espressione regolare per colori esadecimali: /^#([0-9A-F]{3}){1,2}$/i */}
      <nav className=" w-full h-auto bg-sky-50 p-6 ps-[10%]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          className="flex gap-6"
        >
          <label htmlFor="color" className=" hidden">
            Colore
          </label>
          <input
            // onChange={selezionaColore}
            id="color"
            name="color"
            type="text"
            className=" bg-transparent border-b-2 border-gray-300 px-2"
            placeholder="#1194ec"
            {...register("color", {
              pattern: {
                value: /^#([0-9A-F]{3}){1,2}$/i,
                message: "messaggio di errore",
              },
              required: "Il campo colore e necessario",
            })}
          />
          {/* messaggio di errore input colore */}
          {errors.color && (
            <p className="text-red-500">{errors.color.message}</p>
          )}
          <label htmlFor="quantity" className=" hidden">
            Quantita
          </label>
          <input
            // onChange={selezionaColore}
            id="quantity"
            name="quantity"
            type="number"
            max={60}
            min={5}
            step={5}
            className=" bg-transparent border-b-2 border-gray-300 px-2 w-20"
            placeholder="10"
            {...register("quantity", {
              required: "il campo quantita e obbligatorio",
              min: { value: 5, message: "il valore minimo e 5" },
              max: { value: 60, message: "il valore massimo e 60" },
            })}
          />
          {/* messaggio di errore input quantita */}
          {errors.quantity && (
            <p className="text-red-500">{errors.quantity.message}</p>
          )}

          <button
            type="submit"
            className=" text-sm uppercase bg-sky-200 px-4 rounded-full shadow-sm shadow-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/40 hover:scale-105"
          >
            Create
          </button>
        </form>
      </nav>

      <section className=" grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {isLoading ? (
          // messaggio di caricamento
          <div className=" w-full h-screen absolute flex justify-center items-center">
            <p className=" font-semibold bg-green-200 p-4 rounded animate-pulse md:p-8 lg:p-12 lg:font-bold xl:p-16">
              Sto caricando
            </p>
          </div>
        ) : isError ? (
          // messaggio di errore
          <div className=" w-full h-screen absolute flex justify-center items-center">
            <p className=" font-semibold bg-red-400 p-4 rounded animate-pulse md:p-8 lg:p-12 lg:font-bold xl:p-16">
              {messageError}{" "}
              <span>
                <br />
                In alternativa ricarica la pagina
              </span>
            </p>
          </div>
        ) : coloreGenerato.length > 0 ? (
          // vengono generati i colori
          coloreGenerato.map((color) => (
            <SingleColor rgb={color.rgb} key={uuidv4()} />
          ))
        ) : (
          // messaggio iniziale
          <div className=" w-full h-screen absolute flex justify-center items-center">
            <p className=" font-semibold bg-sky-300 p-4 rounded animate-pulse md:p-8 lg:p-12 lg:font-bold xl:p-16">
              Inserisci un colore e una quantita per generare una sfumatura.
              <br />
              minimo 5 massimo 60
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default ColorGrading;

// coloreGenerato contiene un array di oggetti cosi composto
// eslint-disable-next-line no-unused-vars
const _Values = {
  alpha: 1,
  rgb: [(255, 255, 255)], // mi serve solo rgb
  type: "tint",
  weight: 100,
  hex: "ffffff", // potrei usare direttamente hex e aggiungere un '#' davanti
};
