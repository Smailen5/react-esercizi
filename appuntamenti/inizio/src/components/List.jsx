import React, { useState } from "react";
import data from "../data";

const List = () => {

  return (
    <>
      <section className="bg-neutral-800 rounded-md shadow-md shadow-black my-10">
        <ul className="flex flex-col gap-4 ">
          <Person />
        </ul>
      </section>
    </>
  );
};

export default List;

const Person = () => {
  const [persona, setPersona] = useState(data);
  return (
    <>
      {persona.map((el) => {
        const { id, nome, stato, img } = el;
        return (
          <li key={id} className="flex items-center gap-4 p-4">
            <img src={img} alt={img} className="rounded-full w-12 h-12" />
            <div>
              <div className="flex justify-between pb-1">
                <h2 className="text-sm font-bold">{nome}</h2>
                <button className="bg-red-900 w-4 h-4 flex justify-center items-center rounded-sm text-black font-semibold">
                  x
                </button>
              </div>
              <p className="text-xs italic">{stato}</p>
            </div>
          </li>
        );
      })}
    </>
  );
};
