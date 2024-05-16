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
      <div className="flex flex-col justify-center items-center text-blue-200 m-6">
        <h2 className="font-bold capitalize text-4xl">Prossimi incontri</h2>
        {/* removeItem e persona vengono passate come props cosi possono accedervi */}
        <List data={persona} removeItem={removeItem} />
        <div className="flex w-full justify-between max-w-sm">
          <button
            onClick={reload}
            className="bg-blue-500 px-5 py-1 rounded-xl uppercase text-xxs font-bold"
          >
            ricarica
          </button>
          <button
            onClick={deleteAll}
            className="rounded-xl border-2 px-5 py-1 border-red-500 uppercase text-xxs font-bold text-red-500"
          >
            elimina tutto
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
