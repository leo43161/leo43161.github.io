import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/font.css";
import Headers from "./Components/Headers";
import SobreMi from "./Components/SobreMi";

function App() {
  return (
    <div>
      <section className="d-flex px-3 py-2">
        <div className="col-7 p-0 shadow">
          <Headers></Headers>
        </div>
        <div className="col-5 pl-3 pr-0">
          <SobreMi></SobreMi>
        </div>
      </section>
      <section className="d-flex px-3 py-2">
        <div className="col-7 p-0 shadow border border-dark">
          
        </div>
        <div className="col-5 pl-3 pr-0 border border-dark">

        </div>
      </section>
    </div>
  );
}

export default App;
