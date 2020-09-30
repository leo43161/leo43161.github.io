import React from "react";

const CardExperiencia = () => {
  return (
    <div className="bg-blue text-white d-flex">
        <div className="col-4 p-3 d-flex flex-column bg-black justify-content-center align-items-start border-right border-bottom shadow">
            <h6 className="font-weight-light">25/8/2019 - 05/01/2020</h6>
            <h5 className="font-weight-light">Simoca</h5>
        </div>
        <div className="col-8 p-3 border-bottom">
            <h3 className="font-weight-bold">Recepcionista</h3>
            <p>Trabaje de recepcionista en una tienda de artesanias atendiendo gente, donde pude desarrollar mis habilidades al tratar con gente.</p>
        </div>
    </div>
  );
};

export default CardExperiencia;
