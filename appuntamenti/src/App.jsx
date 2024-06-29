import List from "./components/List";
import data from "./data";
import { useState } from "react";

function App() {
  const [persona, setPersona] = useState(data);
  // Per eliminare tutto setto setPersona a un array vuoto
  const deleteAll = () => {
    setPersona([]);
  };
  // Per ricaricare passo a setPersona di nuovo tutti i dati
  const reload = () => {
    setPersona(data);
  };
  // Metto dentro una variabile tutti gli elementi che hanno un id diverso da quello selezionato, poi lo passo a setPersona
  const removeItem = (id) => {
    let newPeople = persona.filter((el) => el.id !== id);
    setPersona(newPeople);
  };
  return (
    <>
      <div className="m-6 flex flex-col items-center justify-center text-blue-200">
        <h2 className="text-4xl font-bold capitalize">Prossimi incontri</h2>
        {/* removeItem e persona vengono passate come props cosi possono accedervi */}
        <List data={persona} removeItem={removeItem} />
        <div className="flex w-full justify-between md:max-w-lg">
          <button
            onClick={reload}
            className="rounded-xl bg-blue-500 px-5 py-1 text-xxs font-bold uppercase hover:bg-blue-400 hover:text-white"
          >
            ricarica
          </button>
          <button
            onClick={deleteAll}
            className="rounded-xl border-2 border-red-500 px-5 py-1 text-xxs font-bold uppercase text-red-500 hover:bg-red-500 hover:text-white"
          >
            elimina tutto
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
