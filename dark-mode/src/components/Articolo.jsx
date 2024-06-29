/* eslint-disable react/prop-types */
// import React from "react";

const Articolo = ({ data }) => {
  //   console.log(data);
  return (
    <article className="grid max-w-lg grid-cols-2 gap-8">
      {data.map((el) => {
        const { id, title, body } = el;
        return (
          <div
            key={id}
            className="grid gap-4 rounded-md bg-white p-4 text-center text-black shadow-xl dark:bg-neutral-700 dark:text-white"
          >
            <h6 className="flex flex-col items-center text-lg font-bold capitalize">
              {title}
              <hr className="w-1/4 border-red-500"></hr>
            </h6>

            <p className="text-sm">{body}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Articolo;
