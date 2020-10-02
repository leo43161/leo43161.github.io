import React from "react";

const Habilidad = (props) => {
  return (
    <div className="px-2 py-3 border-bottom">
      <h4>{props.habilidad}</h4>
      <div className="progress">
        <div
          className="progress-bar bg-black"
          role="progressbar"
          style={{width: `${props.porcentaje}%`}}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default Habilidad;
