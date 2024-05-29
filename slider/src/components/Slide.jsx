import PropTypes from "prop-types";

const Slide = ({ autore, recensione, voto, classe }) => {
  return (
    <article className={`slide ${classe}`}>
      <div className="review">
        <h4>{autore}</h4>
        <p>{recensione}</p>
        <div className="star-container">{voto}</div>
      </div>
    </article>
  );
};

// definisco le props cosi eslint smette di rompere le palle
Slide.propTypes = {
  voto: PropTypes.number.isRequired,
  recensione: PropTypes.string.isRequired,
  autore: PropTypes.string.isRequired,
  classe: PropTypes.string,
};

export default Slide;
