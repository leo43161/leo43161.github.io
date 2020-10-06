import React from "react";
import FormacionCard from "./FormacionCard";

const Formacion = () => {
  return (
    <div className="owsla bg-blue shadow">
      <div className="w-100 text-white">
        <h2 className="text-center">Formacion Academica</h2>
      </div>
      <FormacionCard
        academia="Rolling Code"
        titulo="Programador FullStack"
        descripcion="Un curso de programacion FullStack donde aprendí a manejar el frontend y backend de un sistema orientado en paguinas web, ademas de enseñarnos a trabajar en una metodologia Scrum y aprender a usar herramientas verdareramente utiles como Slack | Trello | Git | Drive | Zoom y muchas mas..., el cual se realizo en su totalidad por video llamada."
        tiempo="25/8/2019 - 05/01/2020"
        lugar="San Miguel de Tucuman - Tucuman - Argentina"
      ></FormacionCard>
      <FormacionCard
        academia="Escuela Tecnica N°1"
        titulo="Tecnico en Informatica Profesional y Personal"
        descripcion="En 4° año de secundario eleguí seguir la orientacion de informatica, en la cual aprendí todo lo necesario para poder ampliar mi conocimiento en el area de programacion, computación, pensamiento lógico, matemáticas y ademas de ayudarme a decidir para donde apuntar en mi futuro."
        tiempo="02/03/2015 - 13/12/2019"
        lugar="Monteros - Tucuman - Argentina"
      ></FormacionCard>
      <FormacionCard
        academia="Escuela Tecnica N°1"
        titulo="English for work Level: Beginners"
        descripcion="Este curso explica lo esencial de la gramática y el vocabulario – y además, la
        pronunciación, realizando clases practicas, mucha conversacion, lectura de textos simples y trabajo con video y audio."
        tiempo="12/06/2020 - En proceso..."
        lugar="San Miguel de Tucuman - Tucuman - Argentina"
      ></FormacionCard>
    </div>
  );
};

export default Formacion;
