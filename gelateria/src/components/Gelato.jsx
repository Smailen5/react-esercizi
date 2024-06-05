import PropTypes from "prop-types";

const Gelato = ({ id, nome, img, descrizione, prezzo, categoria }) => (
  <article
    key={id}
    className="group w-full flex gap-4 p-3 bg-sky-100 text-black shadow-lg rounded hover:bg-sky-400/[0.4] hover:scale-105 transition ease-linear lg:p-4"
  >
    <div className=" w-full max-w-32 md:w-32 h-24 p-1 bg-white rounded-md shadow-md group-hover:scale-110 delay-300 transition-transform duration-500 md:group-hover:animate-bounce lg:min-w-44 lg:h-32">
      <img
        src={img}
        alt={nome}
        className="rounded-md w-full h-full object-cover "
      />
    </div>
    <section>
      <header className="flex justify-between items-start">
        <div className="flex flex-col">
          <h5 className="text-sm font-bold xl:text-base">{nome}</h5>
          <h6 className="text-xs text-neutral-700 font-bold xl:text-sm">
            {categoria}
          </h6>
        </div>
        <span className="text-xs text-white font-semibold bg-blue-400 px-1 rounded inline-block xl:text-sm">
          {(prezzo / 100).toFixed(2) + "€"}
        </span>
      </header>
      <hr className="my-1 border-neutral-400 lg:my-2" />
      <p className="text-xs text-neutral-600 xl:text-sm">{descrizione}</p>
    </section>
  </article>
);

// Props Validation
Gelato.propTypes = {
  id: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  descrizione: PropTypes.string.isRequired,
  prezzo: PropTypes.number.isRequired,
  categoria: PropTypes.string.isRequired,
};

export default Gelato;
