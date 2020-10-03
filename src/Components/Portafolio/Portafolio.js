import React, { Fragment } from "react";
import Diseños from "./Diseños";
import Lenguaje from "./Lenguaje";
import {
  faCss3Alt,
  faHtml5,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

const Portafolio = () => {
  return (
    <div className="w-100 d-flex flex-wrap">
      <Diseños
        nombre="Cinema"
        descripcion="Este fue el primer proyecto que hicimos en el curso de FullStack, el
        cual se basó en un blog de peliculas, donde nosotros realizamos
        reseñas de peliculas o series que nos guste y nos parezca
        interesante, para realizar este proyecto tuvimos una semana, en lo cual
        aplicamos el conocimiento que nos otorgaron durante un mes de clase de CSS,
        HTML y Bootstrap, lo creamos con un grupo de 4 personas
        incluyendome."
        imagen="cinemablog"
        url="https://cinemablog.netlify.app/index.html"
        lenguajes={
          <Fragment>
            <Lenguaje
              width={"50"}
              color={"#DD4B25"}
              icono={faHtml5}
              lenguaje="HTML"
            ></Lenguaje>
            <Lenguaje
              width={"50"}
              color={"#1F5FAA"}
              icono={faCss3Alt}
              lenguaje="CSS"
            ></Lenguaje>
            <Lenguaje
              width={"100"}
              color={"#7952B3"}
              icono={faBootstrap}
              lenguaje="Bootstrap"
            ></Lenguaje>
          </Fragment>
        }
      ></Diseños>
      <Diseños
        nombre="Cinema"
        descripcion="Este fue el primer proyecto que hicimos en el curso de FullStack, el
        cual se basó en un blog de peliculas, donde nosotros realizamos
        reseñas de peliculas o series que nos guste y nos parezca
        interesante, para realizar este proyecto tuvimos una semana, en lo cual
        aplicamos el conocimiento que nos otorgaron durante un mes de clase de CSS,
        HTML y Bootstrap, lo creamos con un grupo de 4 personas
        incluyendome."
        imagen="cinemablog"
        url="https://cinemablog.netlify.app/index.html"
        lenguajes={
          <Fragment>
            <Lenguaje
              width={"50"}
              color={"#DD4B25"}
              icono={faHtml5}
              lenguaje="HTML"
            ></Lenguaje>
            <Lenguaje
              width={"50"}
              color={"#1F5FAA"}
              icono={faCss3Alt}
              lenguaje="CSS"
            ></Lenguaje>
            <Lenguaje
              width={"100"}
              color={"#7952B3"}
              icono={faBootstrap}
              lenguaje="Bootstrap"
            ></Lenguaje>
          </Fragment>
        }
      ></Diseños>
    </div>
  );
};

export default Portafolio;
