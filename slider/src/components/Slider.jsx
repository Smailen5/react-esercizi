import { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";

const Slider = () => {
  const [recensioni, setRecensioni] = useState(data);
  const [active, setActive] = useState(0);

  // funzioni cambio slide dinamicamente in base alla quantita di recensioni
  const nextSlide = () => {
    if (active < recensioni.length - 1) {
      setActive(active + 1);
    } else {
      setActive(0);
    }
  };

  const prevSlide = () => {
    if (active > 0) {
      setActive(active - 1);
    } else {
      setActive(recensioni.length - 1);
    }
  };

  return (
    <>
      <div className="container slider">
        {recensioni.map((recensione, index) => {
          // logica per gestire la visualizzazione delle recensioni
          let positionClass = "";

          if (index === active) {
            positionClass = "active";
          } else if (
            index + 1 === active ||
            (active === 0 && index === recensioni.length - 1)
          ) {
            positionClass = "prev";
          } else {
            positionClass = "next";
          }
          return (
            <Slide key={recensione.id} {...recensione} classe={positionClass} />
          );
        })}

        <div className="btn-group slider-btn-group">
          <button onClick={prevSlide} className="btn btn-slider prev-slider">
            Prev
          </button>
          <button onClick={nextSlide} className="btn btn-slider next-slider">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
