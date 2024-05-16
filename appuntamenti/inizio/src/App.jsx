import List from "./components/List";
import data from "./data";
import { useState } from "react";

function App() {
  const [persona, setPersona] = useState(data);
  const deleteAll = ()=>{
    setPersona([])
  }
  const reload = ()=>{
    setPersona(data)
  }
  return (
    <>
      <div className="flex flex-col justify-center items-center text-blue-200 m-6">
        <h2 className="font-bold capitalize text-4xl">Prossimi incontri</h2>
        <List data={persona} />
        <div className="flex w-full justify-between">
          <button onClick={reload}
            className="bg-blue-500 px-5 py-1 rounded-xl uppercase text-xxs font-bold"
          >
            reload
          </button>
          <button onClick={deleteAll} className="rounded-xl border-2 px-5 py-1 border-red-500 uppercase text-xxs font-bold text-red-500">
            delete all
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
