/* eslint-disable react/prop-types */
// import React from "react";

const Articolo = ({ data }) => {
  //   console.log(data);
  return (
    <article className="grid grid-cols-2 gap-8 max-w-lg">
      {data.map((el) => {
        const { id, title, body } = el;
        return (
          <div
            key={id}
            className=" bg-white text-black shadow-xl dark:bg-neutral-700 dark:text-white rounded-md p-4 text-center grid gap-4"
          >
            <h6 className="font-bold text-lg capitalize flex flex-col items-center">
              {title}
              <hr className="border-red-500 w-1/4"></hr>
            </h6>

            <p className="text-sm">{body}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Articolo;
