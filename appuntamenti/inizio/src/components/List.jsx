const List = ({ data, removeItem }) => {
  //   console.log(props.data);
  return (
    <>
      <section className="bg-neutral-800 rounded-md shadow-md shadow-black my-10 lg:max-w-sm">
        <ul className="flex flex-col gap-4 ">
          {/* Faccio il map dei data in arrivo */}
          {data.map((persona) => {
            return (
              // imposto un key univoco usando id del oggetto data che ricevo
              <li
                key={persona.id}
                className="flex items-center gap-4 p-4"
              >
                {/* Passo come props la funzione removeItem, passo anche tutti i dati a Person */}
                <Person {...persona} removeItem={removeItem} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default List;

const Person = ({ nome, stato, img, removeItem, id }) => {
  return (
    <>
      <img src={img} alt={"link: " + img} className="rounded-full w-12 h-12" />
      <div>
        <div className="flex justify-between pb-1">
          <h2 className="text-sm font-bold">{nome}</h2>
          <button
            onClick={() => removeItem(id)}
            className="bg-red-900 w-4 h-4 flex justify-center items-center rounded-sm text-black font-semibold"
          >
            x
          </button>
        </div>
        <p className="text-xs italic">{stato}</p>
      </div>
    </>
  );
};
