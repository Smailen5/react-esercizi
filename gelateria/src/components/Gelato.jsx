/* eslint-disable react/prop-types */
const Gelato = ({ gelati }) => {
  return (
    <section className="gelato">
      {gelati.map((gelato) => {
        const { id, nome, img, descrizione, prezzo, categoria } = gelato;
        return (
          <article
            key={id}
            className="flex items-center gap-4 p-2 bg-sky-100 text-black" // attenzione a questo gap, sta cambiando le dimensioni della scheda
          >
            <div className=" min-w-32 h-24 p-1 bg-white rounded-md ">
              <img
                src={img}
                alt={descrizione}
                className="rounded-md m-auto w-full h-full object-cover "
              />
            </div>

            <section>
              <header className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h5 className="text-xs">{nome}</h5>
                  <h6 className="text-xs">{categoria}</h6>
                </div>
                <span className="text-xs text-white font-sans font-bold bg-blue-400 p-0.5 px-1 rounded-md inline-block">
                  {prezzo}
                </span>
              </header>
              <hr />
              <p>{descrizione}prova</p>
            </section>
          </article>
        );
      })}
    </section>
  );
};

export default Gelato;
