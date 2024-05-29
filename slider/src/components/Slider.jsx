import { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
  const [recensioni, setRecensioni] = useState(data);

  return (
    <>
      <div className="container slider">
        {recensioni.map((recensione) => (
          <Slide key={recensione.id} {...recensione} />
        ))}

        <div className="btn-group slider-btn-group">
          <button className="btn btn-slider prev-slider">Prev</button>
          <button className="btn btn-slider next-slider">Next</button>
        </div>
      </div>
    </>
  );
};

export default Slider;
