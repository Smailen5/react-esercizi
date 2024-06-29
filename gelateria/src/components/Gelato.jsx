import PropTypes from "prop-types";

const Gelato = ({ id, nome, img, descrizione, prezzo, categoria }) => (
  <article
    key={id}
    className="group flex w-full items-center gap-4 rounded bg-sky-100 p-3 text-black shadow-lg transition ease-linear hover:scale-105 hover:bg-sky-400/[0.4] lg:p-4"
  >
    <div className="h-24 min-w-32 max-w-32 rounded-md bg-white p-1 shadow-md transition-transform delay-300 duration-500 group-hover:scale-110 md:group-hover:animate-bounce lg:h-32 lg:min-w-44">
      <img
        src={img}
        alt={nome}
        className="h-full w-full rounded-md object-cover"
      />
    </div>
    <section className="flex-grow">
      <header className="flex items-start justify-between">
        <div className="flex flex-col">
          <h5 className="text-sm font-bold xl:text-base">{nome}</h5>
          <h6 className="text-xs font-bold text-neutral-700 xl:text-sm">
            {categoria}
          </h6>
        </div>
        <span className="inline-block rounded bg-blue-400 px-1 text-xs font-semibold text-white xl:text-sm">
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
