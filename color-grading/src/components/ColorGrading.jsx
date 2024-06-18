// import { useState, useEffect } from "react";
// import Values from "values.js";
import SingleColor from "./SingleColor";
// import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {
  return (
    <div className=" grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <SingleColor />
    </div>
  );
};

export default ColorGrading;
