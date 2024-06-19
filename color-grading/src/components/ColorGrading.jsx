import { useState, useEffect } from "react";
// import Values from "values.js";
import SingleColor from "./SingleColor";
// import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {
  const [selected, setSelected] = useState({
    color: '',
    quantity: "",
  });

  // gestisce l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dati non inviati");
  };

  // aggiorna lo stato e salva i dati in selected
  const handleChange = (e) => {
    const { name, value } = e.target; 
    setSelected({ ...selected, [name]: value }); 
  };

  // solo per vedere se lo stato viene aggiornato correttamente
  useEffect(()=>{
    console.log(selected)
  }, [selected])

  return (
    <>
      <nav className=" w-full h-auto bg-sky-50 p-6 ps-[10%]">
        <form onSubmit={handleSubmit} action="#" className="flex gap-6">
          <label htmlFor="color" className=" hidden">
            Colore
          </label>
          <input
            onChange={handleChange}
            id="color"
            name="color"
            type="text"
            className=" bg-transparent border-b-2 border-gray-300 px-2"
            placeholder="#1194ec"
          />

          <label htmlFor="quantity" className=" hidden">
            Quantita
          </label>
          <input
            onChange={handleChange}
            id="quantity"
            name="quantity"
            type="number"
            max={25}
            min={5}
            className=" bg-transparent border-b-2 border-gray-300 px-2 w-20"
            placeholder="10"
          />

          <button
            type="submit"
            className=" text-sm uppercase bg-sky-200 px-4 rounded-full shadow-sm shadow-indigo-500/40 hover:shadow-md hover:shadow-indigo-500/40 hover:scale-105"
          >
            Create
          </button>
        </form>
      </nav>

      <section className=" grid gap-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <SingleColor />
      </section>
    </>
  );
};

export default ColorGrading;
