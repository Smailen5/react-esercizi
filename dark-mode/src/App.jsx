import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./components/Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

function App() {
  const [database, setDatabase] = useState([]);
  const [theme, setTheme] = useState(true);

  // Carico i dati all'avvio con useEffect e non li ricarico piu
  useEffect(() => {
    setDatabase(data);
  }, []);

  // Funzione che cambia il tema a seconda del suo valore, questo per funzionare con tailwind, controlla
  // anche il file di configurazione tailwind.config.js
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  console.log(theme);

  return (
    <>
      <div className="min-h-svh dark:bg-neutral-900">
        <div className="mb-10 py-4 text-center">
          {/* <h2>DARK MODE APP</h2> */}
          <button
            onClick={() => setTheme(!theme)}
            className="bg-blue-400 text-black shadow-xl hover:bg-black hover:text-blue-400 dark:bg-red-500 dark:text-white dark:hover:bg-white dark:hover:text-red-500"
            style={{
              // Questi valori sono comuni per entrambi i tasti
              fontSize: "0.75rem",
              lineHeight: "1rem",
              borderRadius: "0.75rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.25rem",
              paddingBottom: "0.25rem",
              textTransform: "uppercase",
            }}
          >
            cambia modalita
          </button>
          <p className="py-4 text-black dark:text-white">
            {theme ? "dark " : "light "}mode attiva
          </p>
        </div>
        <section className="mt-2 flex justify-center">
          <Articolo data={database} />
        </section>
      </div>
    </>
  );
}

export default App;
