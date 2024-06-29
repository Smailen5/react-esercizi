/* eslint-disable react/prop-types */
import { RiDeleteBack2Fill } from "react-icons/ri";

const List = ({ data, removeItem }) => {
  //   console.log(props.data);
  return (
    <>
      <section className="my-10 rounded-md bg-neutral-800 shadow-md shadow-black">
        <ul className="flex flex-col gap-4">
          {/* Faccio il map dei data in arrivo */}
          {data.map((persona) => {
            return (
              // imposto un key univoco usando id del oggetto data che ricevo
              <li key={persona.id} className="flex items-center gap-4 p-4">
                {/* Passo come props la funzione removeItem, passo anche tutti i dati a Person */}
                <Person {...persona} removeItem={removeItem} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default List;

const Person = ({ nome, stato, img, removeItem, id }) => {
  return (
    <>
      <img src={img} alt={"link: " + img} className="h-12 w-12 rounded-full" />
      <div className="w-full">
        <div className="flex justify-between pb-1">
          <h2 className="text-sm font-bold">{nome}</h2>
          <button
            onClick={() => removeItem(id)}
            className="rounded-lg p-1 text-red-500 hover:bg-red-500 hover:text-white"
          >
            <RiDeleteBack2Fill />
          </button>
        </div>
        <p className="text-xs italic">{stato}</p>
      </div>
    </>
  );
};
