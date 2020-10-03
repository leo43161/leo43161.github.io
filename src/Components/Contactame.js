import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import emailjs from "emailjs-com/dist/email";

const Contactame = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    asunto: "",
    email: "",
    mensaje: "",
  });

  const [error, setError] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const [msjError, setMsjError] = useState("");

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let expresion = /\w+@\w+\.[a-z]/;
    console.log(expresion.test(datos.email.trim()));
    if (datos.nombre.trim() === "") {
      setMsjError("Ingrese un Nombre o Empresa");
      setError(true);
      return;
    } else if (
      datos.email.trim() === "" ||
      expresion.test(datos.email.trim()) !== true
    ) {
      setMsjError("Ingrese un Email valido");
      setError(true);
      return;
    } else if (datos.mensaje.trim() === "") {
      setMsjError("Ingrese un Mensaje");
      setError(true);
      return;
    }
    setError(false);

    const templateParams = {
      to_name: "Leonardo",
      from_issue: datos.asunto,
      from_name: datos.nombre,
      message_html: datos.mensaje,
      reply_to: datos.email,
    };

    emailjs.init("user_Uc1j366cDdFEzPicrbzIl");

    emailjs.send("service_dqyemva", "template_67mj8aam", templateParams).then(
      function (response) {
        setEnviado(true);
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        setError(true);
        setMsjError("No se a podido enviar el Correo")
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className="bg-white w-100 h-100 border d-flex flex-column owsla">
      <div className="w-100 border-bottom text-black">
        <h2 className="text-center">Contactame</h2>
      </div>
      <div className="px-3 my-3 h-100">
        <Form
          onSubmit={handleSubmit}
          className="d-flex h-100 flex-column justify-content-between"
        >
          <Form.Group>
            <Form.Label>Nombre o Empresa*</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              onChange={handleChange}
              placeholder="Rolling Code, Globant, SOVOS"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Asunto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Trabajo, Consulta"
              onChange={handleChange}
              name="asunto"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email*</Form.Label>
            <Form.Control
              type="text"
              placeholder="empresa@email.com"
              onChange={handleChange}
              name="email"
            />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mensaje*</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="mensaje"
              onChange={handleChange}
            />
          </Form.Group>

          {error || enviado ? <Alert variant={error ? "danger" : (enviado ? "success": "light")}>{error ? msjError : (enviado ? "Mensaje enviado": null)}</Alert> : null}

          <Button className="bg-blue" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contactame;
