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
            Hola soy Leonardo, como recien graduado y de terminar mis estudios como programador Full Stack, me gustaria ser parte de un equipo de trabajo, para poder seguir avanzando y desarrollando mis habilidades, aportando mis conocimientos y metodos en la materia. <br/>
            Gracias a mi formacion me considero alguien listo para aportar y manejar situaciones de trabajo ya sea en unidad y en equipo. <br/> <br/>
            Me considero alguien que no se conforma con poco y que al realizar tareas, mi mayor critico soy yo mismo. Tambien soy alguien que aprende rapido, que se puede adaptar a casi cualquier ambiente y si me gusta aprender de todos y ayudar a los demas en lo posible. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
