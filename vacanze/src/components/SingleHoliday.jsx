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
        className="bg-neutral-700 rounded-md overflow-hidden"
      >
        <img src={vacanza.img} alt="immagine della vacanza" />
        <article className="p-4">
          <h2 className="text-lg font-semibold pb-2">{vacanza.titolo}</h2>
          <p className="text-sm pb-2">{vacanza.descrizione}</p>
          <div className="flex justify-between text-sm pb-2">
            <span className="">{vacanza.durata}</span>
            <span className="text-sky-400 font-semibold">{resultString} €</span>
          </div>
          <div className="flex justify-between">
            <button
              onClick={decrementa}
              className="bg-sky-500 rounded-xl p-1 px-4"
            >
              <GrFormPreviousLink style={{ color: "rgb(64,64,64)" }} />
            </button>
            <button
              onClick={incrementa}
              className="bg-sky-500 rounded-xl p-1 px-4"
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
