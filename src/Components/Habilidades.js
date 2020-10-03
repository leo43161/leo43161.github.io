import React from "react";
import Habilidad from "./Habilidad";

const Habilidades = () => {
  return (
    <div className="owsla h-100 text-white border shadow bg-light">
      <div className="w-100 border-bottom text-black">
        <h2 className="text-center">Habilidades</h2>
      </div>
      <div className="w-100 d-flex mt-4 flex-wrap justify-content-around">
        <Habilidad nombre="Ingles" porcentaje={18}></Habilidad>
        <Habilidad nombre="Html" porcentaje={70}></Habilidad>
        <Habilidad nombre="Css" porcentaje={60}></Habilidad>
        <Habilidad nombre="JavaScript" porcentaje={50}></Habilidad>
        <Habilidad nombre="Git" porcentaje={35}></Habilidad>
        <Habilidad nombre="Node Js" porcentaje={30}></Habilidad>
        <Habilidad nombre="React Js" porcentaje={50}></Habilidad>
        <Habilidad nombre="Express" porcentaje={20}></Habilidad>
        <Habilidad nombre="Mongo DB" porcentaje={35}></Habilidad>
        <Habilidad nombre="Office" porcentaje={80}></Habilidad>
      </div>
    </div>
  );
};

export default Habilidades;
