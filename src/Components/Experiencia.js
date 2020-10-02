import React from "react";
import CardExperiencia from "./CardExperiencia";

const Experiencia = () => {
  return (
    <div className="owsla bg-blue">
      <div className="w-100 border-bottom text-white">
        <h2 className="text-center">Experiencia Laboral</h2>
      </div>
      <CardExperiencia
        titulo="Recepcionista"
        descripcion="Trabaje de recepcionista en una tienda de artesanias atendiendo gente, donde pude desarrollar mis habilidades al tratar con gente."
        tiempo="25/8/2019 - 05/01/2020"
        lugar="Simoca"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Recepcionista"
        descripcion="Trabaje de recepcionista en una tienda de artesanias atendiendo gente, donde pude desarrollar mis habilidades al tratar con gente."
        tiempo="25/8/2019 - 05/01/2020"
        lugar="Simoca"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Recepcionista"
        descripcion="Trabaje de recepcionista en una tienda de artesanias atendiendo gente, donde pude desarrollar mis habilidades al tratar con gente."
        tiempo="25/8/2019 - 05/01/2020"
        lugar="Simoca"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Recepcionista"
        descripcion="Trabaje de recepcionista en una tienda de artesanias atendiendo gente, donde pude desarrollar mis habilidades al tratar con gente."
        tiempo="25/8/2019 - 05/01/2020"
        lugar="Simoca"
      ></CardExperiencia>
    </div>
  );
};

export default Experiencia;
