import React from "react";

const SobreMi = () => {
  return (
    <div className="d-flex p-0 h-100 shadow bg-light text-dark">
      <div className="owsla d-flex flex-column px-0 w-100">
        <div className="w-100 py-2 pl-3 bg-light text-center">
          <h1 className="m-0">Sobre mi</h1>
        </div>
        <div className="d-flex flex-column px-3 h-100">
          <div>
            <hr className="my-2" />
          </div>
          <div className="d-flex flex-column px-2 text-justify justify-content-start">
            <p style={{fontSize:"19px"}}>
            Hola soy Leonardo, como recién graduado y de terminar mis estudios como programador Full Stack, me gustaría ser parte de un equipo de trabajo, para poder seguir avanzando y desarrollando mis habilidades, aportando mis conocimientos y métodos en la materia. <br/>
            Gracias a mi formación me considero alguien listo para aportar y manejar situaciones de trabajo, ya sea en unidad y/o en equipo. <br/> <br/>
            Soy alguien pro activo y auto crítico de mis actividades. Internalizo el aprendizaje de forma ágil, me adapto a cualquier ambiente, me gusta aprender de todos y siempre, en lo posible, estoy dispuesto a ayudar a quien lo necesite. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
