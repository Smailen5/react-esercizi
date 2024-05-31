/* eslint-disable react/prop-types */
const Gelato = ({ gelati }) => {
  return (
    // attenzione cambia qui per le media query tablet e pc -- usa posizionamento a griglia?
    <section className="flex gap-4 flex-col items-center">
      {gelati.map((gelato) => {
        const { id, nome, img, descrizione, prezzo, categoria } = gelato;
        return (
          <article
            key={id}
            className="group flex items-center gap-4 p-3 bg-sky-100 text-black w-11/12 shadow-lg rounded hover:bg-sky-400/[0.4] hover:scale-105 transition ease-linear" // attenzione a questo gap, sta cambiando le dimensioni della scheda
          >
            <div className=" min-w-32 h-24 p-1 bg-white rounded-md shadow-md group-hover:animate-bounce">
              <img
                src={img}
                alt={descrizione}
                className="rounded-md m-auto w-full h-full object-cover "
              />
            </div>

            <section>
              <header className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h5 className="text-sm font-bold">{nome}</h5>
                  <h6 className="text-xs text-neutral-700 font-bold">
                    {categoria}
                  </h6>
                </div>
                <span className="text-xs text-white font-semibold bg-blue-400  px-1 rounded inline-block">
                  {prezzo}
                </span>
              </header>

              <hr className="my-1 border-neutral-400" />

              <p className="text-xs text-neutral-600 ">{descrizione}prova</p>
            </section>
          </article>
        );
      })}
    </section>
  );
};

export default Gelato;
