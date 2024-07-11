import PropTypes from "prop-types";
const Card = ({ title, text, icon, className, subtitle, img }) => {
  return (
    // se className e definito prende il valore, altrimenti lascia vuoto
    <article
      className={`{className ? ${className} : ""} grid place-items-center`}
    >
      <div className="grid w-4/5 place-items-center gap-4">
        <h4 className="font-bold tracking-wider group-hover:text-gray-200">
          {title}
        </h4>

        {subtitle ? (
          <div className="text-sm font-semibold text-gray-500">
            <h6>{subtitle}</h6>
          </div>
        ) : (
          <div className="text-3xl text-pink-500">{icon}</div>
        )}
        {text ? (
          <div className="text-center text-gray-400 group-hover:text-gray-200">
            {text}
          </div>
        ) : (
          <div
            // togliere ${title !== "Tatyana Doglieva" && "bg-top"} quando aggiungerai nuove immagini
            className={`h-52 w-52 rounded-full bg-cover ${title !== "Tatyana Doglieva" && "bg-top"}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        )}
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
