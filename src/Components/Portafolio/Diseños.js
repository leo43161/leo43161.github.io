import React from "react";
import "./Diseños.css";
import Card from "react-bootstrap/Card";

const Diseños = (props) => {
  return (
    <div className="col-6 shadow d-flex p-0  bg-blue text-light">
      <div className="col-8 py-3 px-0 d-flex flex-column justify-content-around">
        <div>
          <h2 className="bg-black w-100 pl-4 py-2">{props.nombre}</h2>
        </div>
        <div className="px-4 text-justify">
          <p className="m-0">
            {props.descripcion}
          </p>
        </div>
        <div className="mt-3 d-flex flex-wrap">{props.lenguajes}</div>
      </div>
      <div className="col-4 p-0 d-flex align-items-center img-diseño overflow-hidden">
        <img
          src={process.env.PUBLIC_URL + `/proyectos/${props.imagen}.png`}
          className="img-fluid"
          alt="Pagina"
        />
        <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
          <a
            className="h5 text-decoration-none text-white stretched-link"
            href={`${props.url}`}
          >
            Ver mas
          </a>
        </Card.ImgOverlay>
      </div>
    </div>
  );
};

export default Diseños;
