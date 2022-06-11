import React from "react";

const Movie = (props) => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-6 mt-3 mb-5">
            <h3 className="text-center">MOVIES DATA</h3>
            <table class="table mt-5 table-bordered">
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
    </>
  );
};

export default Movie;
