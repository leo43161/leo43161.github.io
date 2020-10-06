import React, { Fragment } from "react";
import Diseños from "./Diseños";
import Lenguaje from "./Lenguaje";
import {
  faCss3Alt,
  faHtml5,
  faBootstrap,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Portafolio = () => {
  return (
    <div className="w-100 d-flex flex-column justify-content-between flex-lg-row">
      <div className="d-flex flex-column col-lg-6 col-12 p-0">
        {/* 1 */}
        <Diseños
          nombre="Galeria"
          descripcion="Fue de los primeros ejercicios que nos dieron, pasando 2 semanas de clases, aplicamos 
          el lenguaje css y html, en donde jugamos un poco con los efectos de css."
          imagen="galeria"
          url="https://elegant-galery.netlify.app/"
          lenguajes={
            <Fragment>
              <Lenguaje
                width={"100"}
                color={"#DD4B25"}
                icono={faHtml5}
                lenguaje="HTML"
              ></Lenguaje>
              <Lenguaje
                width={"100"}
                color={"#1F5FAA"}
                icono={faCss3Alt}
                lenguaje="CSS"
              ></Lenguaje>
            </Fragment>
          }
        ></Diseños>
        {/* 3 */}
        <Diseños
          nombre="Cocu"
          descripcion="Aquí realicé el maquetado de una paguina con varias paguinas donde empecé a implementar el framework bootstrap, realizando experimentaciones con css y sus efectos."
          imagen="cocu"
          url="https://pana321.netlify.app/index.html"
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
        {/* 5 */}
        <Diseños
          nombre="Reloj"
          descripcion="Practique realizar un reloj con lo enseñado en el curso FullStack, utilizando mi conocimiento y lo enseñado en JavaScript, aplicando los cenceptos de BOM y ademas dando un toque al estilo GTA Vice City."
          imagen="reloj"
          url="https://reloj-gta.netlify.app/"
          lenguajes={
            <Fragment>
              <Lenguaje
                width={"100"}
                color={"#CFB430"}
                icono={faJsSquare}
                lenguaje="JavaScript"
              ></Lenguaje>
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
            </Fragment>
          }
        ></Diseños>
        {/* 7 */}
        <Diseños
          nombre="Rolling Movie"
          descripcion="Despues de practicar con JavaScript, avanzamos aprendiendo a usar WebPack y LocalStorage como metodo de almacenamiento local y asi poder realizar un alta baja y edicion de objetos (Productos, Usuarios, Peliculas etc...) Este proyecto se realizo con 3 compañeron donde el objetivo es crear una paguina para ver series y peliculas, donde existira un admin que pueda subir, eliminar y editar, peliculas y categorias, ademas de poner inciar sesion y registrarse"
          imagen="rollingMovie"
          url="https://rolling-movies.netlify.app/index.html"
          lenguajes={
            <Fragment>
              <Lenguaje
                width={"100"}
                color={"#CFB430"}
                icono={faJsSquare}
                lenguaje="JavaScript"
              ></Lenguaje>
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
            </Fragment>
          }
        ></Diseños>
      </div>
      <div className="d-flex flex-column pl-lg-2 pl-0 col-lg-6 col-12 p-0">
        {/* 2 */}
        <Diseños
          nombre="Fratom Chocolates"
          descripcion="Realice el diseño de la paguina principal de una panaderia de buenos aires, donde aplique el diseño responsive, css y html."
          imagen="fratom"
          url="https://boring-shockley-382c98.netlify.app/index.html"
          lenguajes={
            <Fragment>
              <Lenguaje
                width={"100"}
                color={"#DD4B25"}
                icono={faHtml5}
                lenguaje="HTML"
              ></Lenguaje>
              <Lenguaje
                width={"100"}
                color={"#1F5FAA"}
                icono={faCss3Alt}
                lenguaje="CSS"
              ></Lenguaje>
            </Fragment>
          }
        ></Diseños>
        {/* 4 */}
        <Diseños
          nombre="Cinema"
          descripcion="Este fue el primer proyecto que hicimos en el curso de FullStack, el
        cual se basó en un blog de peliculas, donde nosotros realizamos
        reseñas de peliculas o series que nos guste y nos parezca
        interesante, para realizar este proyecto tuvimos una semana, en lo cual
        aplicamos el conocimiento que nos otorgaron durante un mes de clase de CSS,
        HTML y Bootstrap, lo creamos con un grupo de 4 personas
        incluyendome, donde me encargue de la paguina principal, el navbar y las paguinas de cada pelicula, ademas de eleguir los colores y aplicarlos."
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
        {/* 6 */}
        <Diseños
          nombre="Calculadora"
          descripcion="Aplique todos mis conocimientos en Css, Html, JavaScript, para realizar una calucladora funcional que permite operaciones de dos terminos."
          imagen="calculadora"
          url="https://calculadora-leo.netlify.app/"
          lenguajes={
            <Fragment>
              <Lenguaje
                width={"100"}
                color={"#CFB430"}
                icono={faJsSquare}
                lenguaje="JavaScript"
              ></Lenguaje>
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
            </Fragment>
          }
        ></Diseños>
        {/* 8 */}
        <Diseños
          nombre="App Clima"
          descripcion="Despues de practicar los conceptos necesarios para entender react, empexamos a consumir APIs, esta es una de las que empezamos a usar, es una app web donde colocamos la ciudad y el pais y te muestra el clima del lugar."
          imagen="appClima"
          url="https://app-clima-leo.netlify.app/"
          lenguajes={
            <Fragment>
              <Lenguaje
                width={"100"}
                color={"#17B6E7"}
                icono={faReact}
                lenguaje="React JS"
              ></Lenguaje>
              <Lenguaje
                width={"50"}
                color={"#1F5FAA"}
                icono={faCss3Alt}
                lenguaje="CSS"
              ></Lenguaje>
              <Lenguaje
                width={"50"}
                color={"#7952B3"}
                icono={faHtml5}
                lenguaje="HTML"
              ></Lenguaje>
            </Fragment>
          }
        ></Diseños>
      </div>
    </div>
  );
};

export default Portafolio;
