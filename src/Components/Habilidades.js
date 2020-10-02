import React from "react";
import Habilidad from "./Habilidad";

const Habilidades = () => {
  return (
    <div className="owsla bg-blue h-100 text-white">
      <div className="w-100 border-bottom">
        <h2 className="text-center">Habilidades</h2>
      </div>
      <div className="h-100">
        <div className="w-100 d-flex">
          <div className="col-6 h-100 border-right d-flex flex-column">
            <Habilidad habilidad="Css" porcentaje={80}></Habilidad>
            <Habilidad habilidad="Css" porcentaje={50}></Habilidad>
            <Habilidad habilidad="Css" porcentaje={50}></Habilidad>
          </div>
          <div className="col-6 h-100 d-flex flex-column">
            <Habilidad habilidad="Css" porcentaje={50}></Habilidad>
            <Habilidad habilidad="Css" porcentaje={50}></Habilidad>
            <Habilidad habilidad="Css" porcentaje={50}></Habilidad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
