import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Contactame = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: "",
  });

  return (
    <div className="bg-light w-100 h-100 border d-flex flex-column">
      <div className="w-100 border-bottom text-black">
        <h2 className="text-center">Contactame</h2>
      </div>
      <div className="px-3 my-3 h-100">
        <Form className="d-flex h-100 flex-column justify-content-between">
          <Form.Group>
            <Form.Label>Nombre o Empresa*</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              placeholder="Rolling Code, Globant, SOVOS"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Asunto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Trabajo, Consulta"
              name="asunto"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email*</Form.Label>
            <Form.Control type="text" placeholder="empresa@email.com"
             name="email" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje*</Form.Label>
            <Form.Control as="textarea" rows="3" name="mensaje" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contactame;
