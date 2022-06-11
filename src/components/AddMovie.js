import React, { useState, useContext } from "react";
import { movieContext } from "./MovieContext";

export const AddMovie = () => {
  const [movies, setMovies] = useContext(movieContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const inputMovie = (event) => {
    setName(event.target.value);
  };
  const inputPrice = (event) => {
    setPrice(event.target.value);
  };
  const submitData = (event) => {
    event.preventDefault();
    setMovies((preData) => [...preData, { name: name, price: price }]);
    setName("");
    setPrice("");
  };
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-5 mb-5">
            <div className="card pt-4 pb-4 px-5 shadow">
              <h3 className="text-center">FILL MOVIE FORM</h3>
              <form className="mt-md-5 mt-3" onSubmit={submitData}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email Movie Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={inputMovie}
                    value={name}
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Enter Movie Price
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    onChange={inputPrice}
                    value={price}
                  />
                </div>

                <button type="submit" class="btn btn-warning py-2 px-4">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
