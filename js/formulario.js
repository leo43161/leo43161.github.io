let nombre = document.getElementById("nombre");
let asunto = document.getElementById("asunto");
let email = document.getElementById("email");
let mensaje = document.getElementById("mensaje");

function revisar(input) {
    if (input.value == "") {
        input.className = "form-control is-invalid";
        return false;
    } else {
        input.className = "form-control is-valid";
        return true;
    }
}

let leo = "5616516";
console.log(leo.length);


function revisarEmail(input) {
    let expresion = /\w+@\w+\.[a-z]/;
    if (input.value != "") {
        if (expresion.test(input.value)) {
            input.className = "form-control is-valid";
            return true;
        } else {
            input.className = "form-control is-invalid";
            return false;
        }
    } else {
        input.className = "form-control is-invalid";
        return false;
    }
}

function revisarLongitud(textArea) {
    if (textArea.value != "" && textArea.value.length >= 10) {
        textArea.className = "form-control is-valid";
        return true;
    } else {
        textArea.className = "form-control is-invalid";
        return false;
    }
}

function validar(event) {
    event.preventDefault();

    if (revisar(nombre) && revisar(asunto) && revisarEmail(email) && revisarLongitud(mensaje)) {
        enviarEmail();
    } else {
        alert("Verifique los datos ingresados");
    }
}

function enviarEmail() {
    var template_params = {
        "from_name": nombre.value,
        "to_name": "Leonardo",
        "message_html": `Asunto: ${asunto.value} - Email: ${email.value} <br>
        Mensaje: <br>
        ${mensaje.value}`
    }

    var service_id = "default_service";
    var template_id = "template_67mj8aam";
    emailjs.send(service_id, template_id, template_params).then(
        function (response){
            console.log(response);
            document.getElementById("verificacion").className = "alert alert-success";
            document.getElementById("verificacion").innerHTML = "Consulta enviada";
        },
        function (error){
            console.log(error);
            document.getElementById("verificacion").className = "alert alert-danger";
            document.getElementById("verificacion").innerHTML = "Hubo un error al enviar";
        }
    )
}