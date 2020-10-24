import React from "react";
import FormacionCard from "./FormacionCard";

const Formacion = () => {
  return (
    <div className="owsla bg-blue shadow">
      <div className="w-100 text-white">
        <h2 className="text-center">Formación Académica</h2>
      </div>
      <FormacionCard
        academia="Rolling Code"
        titulo="Programador FullStack"
        descripcion="Un curso de programación FullStack donde aprendí a manejar el frontend y backend de un sistema orientado en páginas web, además de enseñarnos a trabajar con una metodología Scrum y aprender a usar herramientas verdareramente útiles como Slack | Trello | Git | Drive | Zoom y muchas mas..., el cual se realizó en su totalidad por video llamada."
        tiempo="25/8/2019 - 05/01/2020"
        lugar="San Miguel de Tucuman - Tucuman - Argentina"
      ></FormacionCard>
      <FormacionCard
        academia="Escuela Tecnica N°1"
        titulo="Técnico en Informática Profesional y Personal"
        descripcion="En 4° año de secundario elegí seguir la orientación de informática, en la cual aprendí todo lo necesario para poder ampliar mi conocimiento en el área de programación, computación, pensamiento lógico, matemáticas y además de ayudarme a decidir mi orientacion laboral."
        tiempo="02/03/2015 - 13/12/2019"
        lugar="Monteros - Tucuman - Argentina"
      ></FormacionCard>
      <FormacionCard
        academia="Rolling Code"
        titulo="English for work Level: Beginners"
        descripcion="Este curso explica lo esencial de la gramática y el vocabulario y además, la
        pronunciación, realizando clases prácticas, dialogos, lectura de textos simples y trabajos con videos y audios."
        tiempo="12/06/2020 - 30/09/2020"
        lugar="San Miguel de Tucuman - Tucuman - Argentina"
      ></FormacionCard>
    </div>
  );
};

export default Formacion;
