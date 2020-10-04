import React from "react";

const FormacionCard = () => {
  return (
    <div className="bg-blue text-white d-flex">
      <div className="col-4 p-3 d-flex flex-column bg-black justify-content-center align-items-start border-right border-top shadow">
        <h6 className="font-weight-light">2020</h6>
        <h5 className="font-weight-light">Monteros</h5>
      </div>
      <div className="col-8 p-3 border-top">
        <h3 className="font-weight-bold">Programador FullStack</h3>
        <p>Un curso de programacion FullStack donde aprendí a manejar el frontend y backend de un sistema orientado en paguinas web, ademas de enseñarnos a trabajar en una metodologia Scrum y aprender a usar herramientas verdareramente utiles como Slack | Trello | Git | Drive | Zoom y muchas mas...</p>
      </div>
    </div>
  );
};

export default FormacionCard;
