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
        descripcion="Trabaje de recepcionista en una tienda de artesanias atendiendo gente, donde pude desarrollar mis habilidades al tratar con gente."
        tiempo="25/8/2019 - 05/01/2020"
        lugar="Simoca"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Pasantias en informatica"
        descripcion="Realice 150 horas de pasantias tomando el rol de un profesor, para chicos de 13-14 años en un taller de informatica, cumpliendo un horario y un registro, aprendiendo a manejar la paciencia y la responsabilidad."
        tiempo="25/04/2016 - 21/08/2016"
        lugar="Monteros"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Ayudante en creacion de souvenires"
        descripcion="Ayude en un emprendimiento de creacion de manualidades, en el cual aprendi a realizar el mismo objeto muchas veces, ademas de trabajar bajo la presion de estar ajustado con el tiempo."
        tiempo="25/08/2016 - 25/05/2017"
        lugar="Simoca"
      ></CardExperiencia>
      <CardExperiencia
        titulo="Reparador de Computadoras (Basico) y Asesoramiento tecnologico"
        descripcion="Ofrezco mi conocimiento en reparacion y tecnologia adquiridos por la practica de tantos años e interes, en el cual me especializo en instalar programas y arreglar software, ademas de limpieza de computadoras y asesorar en la compra de computadoras segun la necesidad del cliente."
        tiempo="25/08/2019 - 05/01/2020"
        lugar="Simoca"
      ></CardExperiencia>
    </div>
  );
};

export default Experiencia;
