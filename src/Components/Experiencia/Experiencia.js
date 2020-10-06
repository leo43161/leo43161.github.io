import React from "react";
import CardExperiencia from "./CardExperiencia";
import './Experiencia.css';

const Experiencia = () => {
  return (
    <div className="owsla bg-blue shadow">
      <div className="w-100 text-white">
        <h2 className="text-center">Experiencia Laboral</h2>
      </div>
      <CardExperiencia
        titulo="Recepcionista"
        descripcion="Trabajé de recepcionista en una tienda de artesanías atendiendo gente, donde pude desarrollar mis habilidades sociales."
        tiempo="25/8/2019 - 05/01/2020"
        lugar="Simoca"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Pasantías en informática"
        descripcion="Concreté una carga horaria de 150 horas de pasantías tomando el rol de un profesor, para chicos de 13-14 años en un taller de informática, cumpliendo un horario y un registro, poniendo en práctica la dinámica de grupo y mi responsabilidad."
        tiempo="25/04/2016 - 21/08/2016"
        lugar="Monteros"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Ayudante en creación de souvenires"
        descripcion="Ayudé en un emprendimiento de creación de manualidades, en el cual aprendí a realizar el mismo objeto reiterada veces, cumpliendo las entregas en tiempo y forma."
        tiempo="25/08/2016 - 25/05/2017"
        lugar="Simoca"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Reparador de Computadoras (Básico) y Asesoramiento tecnológico"
        descripcion="Ofrezco mi conocimiento en reparación y tecnología adquiridos por la práctica de tantos años e interes, en el cual me especializo en instalar programas y arreglar software, además de limpieza de computadoras y asesorar en la compra de las mismas según la necesidad del cliente."
        tiempo="25/08/2019 - 05/01/2020"
        lugar="Simoca"
      ></CardExperiencia>
    </div>
  );
};

export default Experiencia;
