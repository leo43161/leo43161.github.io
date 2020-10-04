import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import './Headers.css'

const Headers = () => {
  return (
    <div className="d-flex p-0 w-100 h-100">
      <div className="col-4 p-0 d-none d-sm-flex justify-content-center align-items-center h-100 bg-black">
        <img
          src={process.env.PUBLIC_URL + "foto.png"}
          alt="Foto"
          className="img-fluid"
        />
      </div>
      <div className="col-sm-8 col-12 owsla d-flex flex-column px-0">
        <div className="w-100 py-2 pl-3 bg-blue text-white border-bottom">
          <h1 className="m-0">Leonardo Palavecino</h1>
          <h5 className="font-weight-light font-small p-1 bg-black">
            <em>Programador Web</em>
          </h5>
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
              <a
                className="text-light d-flex align-items-center ml-2"
                href="https://www.linkedin.com/in/leonardo-palavecino-5a01a11b7"
              >
                Leonardo Palavecino
              </a>
            </div>
            <div className="d-flex mr-3">
            <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
              <a
                className="text-light d-flex align-items-center ml-2"
                href="https://www.linkedin.com/in/leonardo-palavecino-5a01a11b7"
              >
                Leonardo Palavecino
              </a>
            </div>
          </div>
        </div>
        <div className="h-100 d-flex bg-blue text-white flex-column justify-content-center px-3 py-3">
          <div>
            <h3>Datos Personales</h3>
            <hr className="my-2 bg-black" />
          </div>
          <div className="d-flex flex-column px-2 justify-content-around h-75">
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">Residencia: </h4>
              <h6 className="mb-0 d-flex">
                Barrio San Roque MD casa 8 - Simoca - Tucuman
              </h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">Edad: </h4>
              <h6 className="mb-0 d-flex">19</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">Cuil: </h4>
              <h6 className="mb-0 d-flex">20-43161301-9</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">Email: </h4>
              <h6 className="mb-0 d-flex">leonardoemployee@gmail.com</h6>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <h4 className="m-0">Telefono: </h4>
              <h6 className="mb-0 d-flex">+54 381 616-2181</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
