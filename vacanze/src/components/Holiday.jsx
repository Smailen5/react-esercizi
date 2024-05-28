import { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

function Holiday() {
  const [vacanze, setVacanze] = useState([]); // se usi map fai attenzione a inizializzare vacanze'useState' ad un array vuoto per non generare errori
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(0);

  // chiamata per recuperare i dati
  const getData = async () => {
    try {
      const response = await axios.get(url);
      // console.log(response.data);
      setVacanze(response.data); // attenzione ritorna un oggetto che contiene un array e una chiave, quindi chiama due volte data per entrare nel array
      // setIsLoading(response.success);
      // console.log(vacanze);
    } catch (error) {
      console.error("Errore nel caricamento dei dati: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // caricamento dei dati al primo render della pagina
  useEffect(() => {
    getData();
  }, []);

  // console.log(vacanze.data[selected].prezzo);

  // funzioni che gestiscono il cambiamento della card
  const incrementa = () => {
    setSelected(function (oldValue) {
      if (oldValue === vacanze.data.length - 1) {
        return oldValue;
      }
      return oldValue + 1;
    });
  };

  const decrementa = () => {
    setSelected((oldValue) => {
      if (oldValue === 0) {
        return oldValue;
      }
      return oldValue - 1;
    });
  };

  // if (vacanze.success) {
  //   console.log(vacanze.data[selected]);
  // }

  return (
    <div className="w-5/6">
      {isLoading ? (
        <p>Caricamento...</p>
      ) : vacanze.data.length > 0 ? (
        <SingleHoliday
          vacanza={vacanze.data[selected]}
          incrementa={incrementa}
          decrementa={decrementa}
        />
      ) : (
        <h4>Non ci sono vacanze</h4>
      )}
    </div>
  );
}

export default Holiday;

// vacanze.data.map((el) => {
//   const { id, titolo, durata, descrizione, prezzo, img } = el;
//   return (
//     <section
//       key={id}
//       className="bg-neutral-700 rounded-md overflow-hidden"
//     >
//       <img src={img} alt="immagine della vacanza" />
//       <article className="p-4">
//         <h2 className="text-lg font-semibold pb-2">{titolo}</h2>
//         <p className="text-sm pb-2">{descrizione}</p>
//         <div className="flex justify-between text-sm pb-2">
//           <span className="">{durata}</span>
//           <span className="text-sky-400 font-semibold">{prezzo} €</span>
//         </div>
//         <SingleHoliday />
//       </article>
//     </section>
//   );
// })
