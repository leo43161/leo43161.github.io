import React from "react";

const FormacionCard = (props) => {
  return (
    <div className="bg-blue text-white d-flex">
      <div className="col-4 p-3 d-flex flex-column bg-black justify-content-center align-items-start border-right border-top shadow">
        <h4 className="font-weight-light">
          <u>{props.academia}</u>
        </h4>
        <h6 className="font-weight-light">{props.tiempo}</h6>
        <h5 className="font-weight-light">{props.lugar}</h5>
      </div>
      <div className="col-8 p-3 border-top">
        <h3 className="font-weight-bold">
          <u>{props.titulo}</u>
        </h3>
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
};

export default FormacionCard;
