"use strict";

/*
  main.js
  --------
  Archivo JS principal del proyecto RecursosPlus e-learning.

  En esta primera versión:
  - Escuchamos el envío del formulario de contacto.
  - Validamos campos básicos.
  - Mostramos mensajes de error o éxito en pantalla.
  - Dejamos trazas en la consola para práctica con DevTools.
*/

// Obtenemos referencias a elementos importantes del DOM
const formContacto = document.getElementById("form-contacto");
const feedback = document.getElementById("form-feedback");

// Verificamos que existan antes de trabajar con ellos
if (formContacto && feedback) {
    formContacto.addEventListener("submit", function (event) {
        // Evitamos que el formulario recargue la página
        event.preventDefault();

        // 1. Capturamos valores de los campos (limpiando espacios con trim)
        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correo").value.trim();
        const area = document.getElementById("area").value;
        const curso = document.getElementById("curso").value;
        const mensaje = document.getElementById("mensaje").value.trim();
        const acepto = document.getElementById("acepto").checked;

        // Dejamos rastro en consola (práctica de console.log)
        console.log("Formulario enviado:", { nombre, correo, area, curso, mensaje, acepto });

        // 2. Validaciones simples (además de los requeridos en el HTML)

        // Validar campos obligatorios
        if (!nombre || !correo || !area || !curso || !acepto) {
            feedback.textContent = "Por favor, completa todos los campos obligatorios y acepta la casilla.";
            feedback.className = "small text-danger";
            console.warn("Validación fallida: campos incompletos.");
            return;
        }

        // Validación muy básica de correo (solo para la demo del curso)
        if (!correo.includes("@") || !correo.includes(".")) {
            feedback.textContent = "El correo parece inválido. Revisa e inténtalo de nuevo.";
            feedback.className = "small text-danger";
            console.warn("Validación fallida: correo inválido.");
            return;
        }

        // 3. Si todo está OK, simulamos un envío exitoso
        feedback.textContent = "¡Gracias! Tu mensaje fue registrado como parte de este proyecto de estudio.";
        feedback.className = "small text-success";
        console.info("Formulario válido. Mostrando mensaje de éxito.");

        // 4. Limpiamos el formulario después de unos segundos para que se vea el mensaje
        setTimeout(() => {
            formContacto.reset();
            feedback.textContent = "";
            feedback.className = "small";
            console.clear(); // opcional: limpia la consola después de la demo
        }, 4000);
    });
} else {
    // Si algo falla en el HTML (ID cambiado, por ejemplo), avisamos en consola
    console.error("No se encontró el formulario de contacto o el contenedor de feedback.");
}
