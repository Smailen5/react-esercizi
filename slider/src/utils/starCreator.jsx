/* eslint-disable no-unused-vars */
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const starCreator = (num) => {
  // crea un array a partire da vari parametri
  return Array.from({ length: 5 }, (_, index) => {
    // stella piena
    if (num >= index + 1) {
      return <BsStarFill key={index} className="star" fill="#fca903" />;
    }
    // mezza stella
    else if (num >= index + 0.5) {
      return <BsStarHalf key={index} className="star" fill="#fca903" />;
    }
    // stella vuota
    else {
      return <BsStar key={index} className="star" fill="#fca903" />;
    }
  });
};

export default starCreator;
