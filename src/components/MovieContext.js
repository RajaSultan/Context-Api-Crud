import React, { createContext, useState } from "react";

export const movieContext = createContext();
export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Fast & Furious",
      price: "$100",
    },
    {
      id: 2,
      name: "Harry Potter",
      price: "$150",
    },
    {
      id: 3,
      name: "Top Gun",
      price: "$300",
    },
  ]);
  return (
    <>
      <movieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </movieContext.Provider>
    </>
  );
};
