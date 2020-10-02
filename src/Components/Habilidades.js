import React from "react";
import Habilidad from "./Habilidad";

const Habilidades = () => {
  return (
    <div className="owsla bg-blue h-100 text-white">
      <div className="w-100 border-bottom">
        <h2 className="text-center">Habilidades</h2>
      </div>
      <div className="w-100 d-flex">
        <div className="col-6 border-right">
          <Habilidad></Habilidad>
          <Habilidad></Habilidad>
          <Habilidad></Habilidad>
        </div>
        <div className="col-6">
          <Habilidad></Habilidad>
          <Habilidad></Habilidad>
          <Habilidad></Habilidad>
        </div>
      </div>
    </div>
  );
};

export default Habilidades;
