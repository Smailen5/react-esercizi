import { useEffect } from "react";
import { useState } from "react";

function Navbar() {
  const [selected, setSelected] = useState({
    color: '',
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("dati non inviati");
  };

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setSelected({ ...selected, [name]: value }); 
  };

  useEffect(()=>{
    console.log(selected)
  }, [selected])
  

  return (
    <>
      <nav className="w-full h-auto bg-sky-50 p-6 ps-[10%]">
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
    </>
  );
}

export default Navbar;
