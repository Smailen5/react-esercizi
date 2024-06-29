/* eslint-disable react/prop-types */
// import { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

function SingleHoliday({ vacanza, incrementa, decrementa }) {
  // console.log(vacanza.prezzo);

  // console.log(typeof vacanza.prezzo);

  // trasformo il prezzo in una stringa per poter aggiungere la virgola
  let number = vacanza.prezzo;
  let numberString = number.toString();
  let position = numberString.length - 2;
  let resultString =
    numberString.slice(0, position) + "," + numberString.slice(position);
  // console.log(resultString);

  // console.log(vacanza);

  // const [count, setCount] = useState(vacanza.id);

  // const incrementa = () => {
  //   setCount(function (oldValue) {
  //     return oldValue + 1;
  //   });
  // };

  // const decrementa = () => {
  //   setCount((oldValue) => {
  //     return oldValue - 1;
  //   });
  // };

  // console.log("il conteggio e a " + count);

  return (
    <div className="flex justify-between">
      <section
        key={vacanza.id}
        className="overflow-hidden rounded-md bg-neutral-700"
      >
        <img src={vacanza.img} alt="immagine della vacanza" />
        <article className="p-4">
          <h2 className="pb-2 text-lg font-semibold">{vacanza.titolo}</h2>
          <p className="pb-2 text-sm">{vacanza.descrizione}</p>
          <div className="flex justify-between pb-2 text-sm">
            <span className="">{vacanza.durata}</span>
            <span className="font-semibold text-sky-400">{resultString} €</span>
          </div>
          <div className="flex justify-between">
            <button
              onClick={decrementa}
              className="rounded-xl bg-sky-500 p-1 px-4"
            >
              <GrFormPreviousLink style={{ color: "rgb(64,64,64)" }} />
            </button>
            <button
              onClick={incrementa}
              className="rounded-xl bg-sky-500 p-1 px-4"
            >
              <GrFormNextLink style={{ color: "rgb(64,64,64)" }} />
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

export default SingleHoliday;

// const Button = ({ children, counter }) => {
//   const counter = () => {
//     console.log("sono stato cliccato");
//   };
//   return <button className="bg-sky-500 rounded-xl p-1 px-4">{children}</button>;
// };
