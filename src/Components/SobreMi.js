import React from "react";

const SobreMi = () => {
  return (
    <div className="d-flex p-0 h-100 shadow">
      <div className="owsla d-flex flex-column px-0 w-100">
        <div className="w-100 py-2 pl-3 bg-blue text-white text-center">
          <h1 className="m-0">Sobre mi</h1>
        </div>
        <div className="d-flex bg-blue text-white flex-column px-3 h-100">
          <div>
            <hr className="my-2 bg-black" />
          </div>
          <div className="d-flex flex-column px-2 text-justify justify-content-start">
            <p>
            Hola soy Leonardo, como recien graduado y de terminar mis estudios como programador Full Stack, me gustaria ser parte de un equipo de trabajo, para poder seguir avanzando y desarrollando mis habilidades, aportando mis conocimientos y metodos en la materia. <br/>
            Gracias a mi formacion me considero alguien listo para aportar y manejar situaciones de trabajo ya sea en unidad y en equipo. <br/> <br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
