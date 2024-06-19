/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import rgbToHex from "../utils/helpers";

const SingleColor = ({ rgb }) => {
  const [message, setMessage] = useState(false);

  // copia il colore negli appunti e avvisa quando copiato
  const handleClick = () => {
    if (Array.isArray(rgb) && rgb.length === 3) {
      navigator.clipboard
        .writeText(rgbToHex(...rgb))
        .then(() => console.log("colore copiato"));
      setMessage(true);
    } else {
      console.error("rgb invalido");
    }
  };
  // console.log(rgb)
  console.log(rgbToHex(...rgb));

  // gestisce la visualizzazione del messaggio
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <>
      <div
        onClick={handleClick}
        className=" rounded p-8 py-14 text-center font-semibold"
        style={{ background: rgbToHex(...rgb) }}
      >
        <p>{rgbToHex(...rgb)}</p>
        {message && <p>Colore copiato</p>}
      </div>
    </>
  );
};

export default SingleColor;
