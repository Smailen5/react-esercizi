/* eslint-disable react/prop-types */
const Gelato = ({ id, nome, img, descrizione, prezzo, categoria }) => (
  /* console.log(el.id);*/ <article
    key={id}
    className="group w-full flex items-center gap-4 p-3 bg-sky-100 text-black shadow-lg rounded hover:bg-sky-400/[0.4] hover:scale-105 transition ease-linear md:w-full"
  >
    <div className="min-w-32 h-24 p-1 bg-white rounded-md shadow-md group-hover:scale-110 delay-300 transition-transform duration-500 md:group-hover:animate-bounce">
      <img
        src={img}
        alt={nome}
        className="rounded-md m-auto w-full h-full object-cover "
      />
    </div>
    <section>
      <header className="flex justify-between items-start">
        <div className="flex flex-col">
          <h5 className="text-sm font-bold">{nome}</h5>
          <h6 className="text-xs text-neutral-700 font-bold">{categoria}</h6>
        </div>
        <span className="text-xs text-white font-semibold bg-blue-400  px-1 rounded inline-block">
          {(prezzo / 100).toFixed(2) + "€"}
        </span>
      </header>
      <hr className="my-1 border-neutral-400" />
      <p className="text-xs text-neutral-600 ">{descrizione}</p>
    </section>
  </article>
);

export default Gelato;
