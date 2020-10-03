import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/font.css";
import Headers from "./Components/Headers";
import SobreMi from "./Components/SobreMi";
import Experiencia from "./Components/Experiencia";
import Habilidades from "./Components/Habilidades";
import Contactame from "./Components/Contactame";
import Portafolio from "./Components/Portafolio/Portafolio";

function App() {
  return (
    <div className="owsla">
      <section className="d-flex px-3 py-2">
        <div className="col-7 p-0 shadow">
          <Headers></Headers>
        </div>
        <div className="col-5 pl-3 pr-0">
          <SobreMi></SobreMi>
        </div>
      </section>
      <section className="d-flex px-3 py-2">
        <div className="col-7 p-0 shadow">
          <Experiencia></Experiencia>
        </div>
        <div className="col-5 pl-3 pr-0">
          <Habilidades></Habilidades>
        </div>
      </section>
      <section className="d-flex px-3 py-2">
        <div className="col-7 p-0 shadow">
          <Experiencia></Experiencia>
        </div>
        <div className="col-5 pl-3 pr-0 shadow">
          <Contactame></Contactame>
        </div>
      </section>
      <section className="w-100">
        <div className="text-center">
          <h1>Portfolio</h1>
          <hr></hr>
        </div>
        <div className="container-fluid">
          <Portafolio></Portafolio>
        </div>
      </section>
    </div>
  );
}

export default App;
