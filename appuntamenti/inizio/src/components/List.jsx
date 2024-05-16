const List = (props) => {
//   console.log(props.data);
  return (
    <>
      <section className="bg-neutral-800 rounded-md shadow-md shadow-black my-10">
        <ul className="flex flex-col gap-4 ">
          {props.data.map((person) => {
            return (
              <li key={person.id} className="flex items-center gap-4 p-4">
                <Person {...person} />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default List;

const Person = ({ nome, stato, img }) => {
  return (
    <>
      <img src={img} alt={'link: ' + img} className="rounded-full w-12 h-12" />
      <div>
        <div className="flex justify-between pb-1">
          <h2 className="text-sm font-bold">{nome}</h2>
          <button className="bg-red-900 w-4 h-4 flex justify-center items-center rounded-sm text-black font-semibold">
            x
          </button>
        </div>
        <p className="text-xs italic">{stato}</p>
      </div>
    </>
  );
};
