import React, { Fragment } from "react";
import Diseños from "./Diseños";
import Lenguaje from "./Lenguaje";
import {
  faCss3Alt,
  faHtml5,
  faBootstrap,
  faJsSquare,
  faReact,
  faNodeJs,
  faEnvira,
  faEtsy
} from "@fortawesome/free-brands-svg-icons";
import Proximamente from "./Proximamente";

const Portafolio = () => {
  return (
    <div className="w-100 d-flex flex-column justify-content-between flex-lg-row flex-lg-wrap mb-2">
      <div className="d-flex flex-column col-lg-6 col-12 p-0 mb-2 mb-md-0">
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
          descripcion="Aquí realicé el maquetado de varias páginas donde empecé a implementar el framework bootstrap, realizando y experimentando con css y sus efectos."
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
          descripcion="Desarrollé un reloj con lo aprendido en el curso FullStack, utilizando mi conocimiento en JavaScript, aplicando los conceptos de BOM y además dando un toque al estilo GTA Vice City."
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
          descripcion="Después de practicar con JavaScript, avanzamos usando WebPack y LocalStorage como método de almacenamiento local y así poder realizar un alta baja y edición de objetos (Productos, Usuarios, Películas etc...) Este proyecto se realizó con 3 compañeron donde el objetivo era crear una página para ver series y peliculas, donde existe un admin que puede subir, eliminar y editar, peliculas y categorías, además de poder inciar sesión y registrarse"
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
        <Diseños
          nombre="Rolling News"
          descripcion="Se desarrolló una página web creando un servidor y una base de datos, utilizando Node js, Express y Mongo DB, ademas de lo ya implementado en proyectos anteriores, dicho proyecto está en proceso de finalización, en el cual nos desempeñamos 5 alumnos (incluyendome), en donde fuí seleccionado scrum master, cumpliendo hasta la fecha los requisitos mínimos"
          imagen="rollingNews"
          url="https://news-rolling.netlify.app/"
          lenguajes={
            <Fragment>
              <Lenguaje
                width={"50"}
                color={"#17B6E7"}
                icono={faReact}
                lenguaje="React JS"
              ></Lenguaje>
              <Lenguaje
                width={"50"}
                color={"#95BA4A"}
                icono={faNodeJs}
                lenguaje="Node JS"
              ></Lenguaje>
              <Lenguaje
                width={"50"}
                color={"#389643"}
                icono={faEnvira}
                lenguaje="Mongo DB"
              ></Lenguaje>
              <Lenguaje
                width={"50"}
                color={"#C6786C"}
                icono={faEtsy}
                lenguaje="Express"
              ></Lenguaje>
            </Fragment>
          }
        ></Diseños>
      </div>
      <div className="d-flex flex-column pl-lg-2 pl-0 col-lg-6 col-12 p-0">
        {/* 2 */}
        <Diseños
          nombre="Fratom Chocolates"
          descripcion="Realicé el diseño de la página principal de una panaderia de Buenos Aires, donde apliqué el diseño responsive, css y html."
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
          descripcion="Este fué el primer proyecto que hicimos en el curso de FullStack, el
        cual se basó en un blog de peliculas, donde realizamos
        reseñas de peliculas o series que nos gustaron y nos parecieron
        interesantes. Para realizar este proyecto tuvimos una semana, en la cual
        aplicamos el conocimiento que nos impartieron durante un mes de clase de CSS,
        HTML y Bootstrap, lo llevamos a cabo con un grupo de 4 personas
        (incluyendome), donde me encargué de la página principal, el navbar y las páginas de cada pelicula, además de elegir los colores y aplicarlos."
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
          descripcion="Apliqué todos mis conocimientos en Css, Html, JavaScript, para realizar una calucladora funcional que permite operaciones de dos términos."
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
          descripcion="Después de practicar los conceptos necesarios para entender react, comenzamos a consumir APIs. Para realizar este trabajo utilicé una API donde colocamos la ciudad, el país y te informa el clima del lugar."
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
        <Proximamente
          nombre="Proximamente..."
          descripcion="Mis aspiraciones son seguir profundizando mis habilidades en el ámbito de la programación, el frontend añadiendo más experiencia al diseño y en el backend al crear servidores, mejorar la seguridad de mis proyectos futuros y manejar con más eficiencia mis datos. También me interesaría aprender otros leguajes de programación, después de perfeccionarme para lo que estoy capacitado."
        ></Proximamente>
      </div>
    </div>
  );
};

export default Portafolio;
