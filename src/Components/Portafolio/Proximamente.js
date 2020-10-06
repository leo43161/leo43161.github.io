import React from "react";

const Proximamente = (props) => {
  return (
    <div className="shadow d-flex p-0 bg-blue text-light mt-2 diseño">
      <div className="col-12 px-0 d-flex flex-column justify-content-center">
        <h2 className="bg-black w-100 px-4 py-2 mb-5">{props.nombre}</h2>
        <div className="px-4 text-justify">
          <p className="m-0">{props.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

export default Proximamente;
