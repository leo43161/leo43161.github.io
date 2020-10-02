import React from "react";

const Habilidad = (props) => {
  return (
    <div className="px-3 py-3 col-5 rounded border shadow-sm text-black mb-3">
      <h4>{props.nombre}</h4>
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
