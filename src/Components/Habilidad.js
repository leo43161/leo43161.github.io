import React from "react";

const Habilidad = () => {
  return (
    <div className="px-2 py-3 border-bottom">
      <h4>Css:</h4>
      <div className="progress">
        <div
          className="progress-bar bg-black"
          role="progressbar"
          style={{width: `${"25"}%`}}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Habilidad;
