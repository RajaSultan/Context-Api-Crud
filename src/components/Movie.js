import React, { useState } from "react";

const Movie = (props) => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-3 mb-5">
            <div className="card pt-4 pb-4 px-5 shadow">
              <h3 className="text-center mb-5">MOVIES DATA</h3>
              <label htmlFor="search">
                <input
                  id="search"
                  type="text"
                  className="ps-2"
                  placeholder="Seach"
                />
              </label>
              <table class="table  mt-4 table-bordered">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Movie Name</th>
                    <th scope="col">Movie Price</th>
                  </tr>
                </thead>
                <tbody>
                  {props.moviesData.map((ele, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{ele.name}</td>
                      <td>{ele.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
