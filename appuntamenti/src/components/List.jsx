/* eslint-disable react/prop-types */
import { RiDeleteBack2Fill } from "react-icons/ri";

const List = ({ data, removeItem }) => {
  //   console.log(props.data);
  return (
    <>
      <section className="bg-neutral-800 rounded-md shadow-md shadow-black my-10 ">
        <ul className="flex flex-col gap-4 ">
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
      <img src={img} alt={"link: " + img} className="rounded-full w-12 h-12" />
      <div className="w-full">
        <div className="flex justify-between pb-1">
          <h2 className="text-sm font-bold">{nome}</h2>
          <button
            onClick={() => removeItem(id)}
            className="text-red-500 rounded-lg p-1 hover:text-white hover:bg-red-500"
          >
            <RiDeleteBack2Fill />
          </button>
        </div>
        <p className="text-xs italic">{stato}</p>
      </div>
    </>
  );
};
