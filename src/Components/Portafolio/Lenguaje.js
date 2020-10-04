import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Lenguaje = (props) => {
  return (
    <div
      className={`w-${props.width} d-flex pl-3 py-2 shadow`}
      style={{ backgroundColor: props.color}}
    >
      <FontAwesomeIcon
        className="mr-md-3 mr-1"
        icon={props.icono}
        size="2x"
      ></FontAwesomeIcon>
      <h3 className="m-0">{props.lenguaje}</h3>
    </div>
  );
};

export default Lenguaje;
