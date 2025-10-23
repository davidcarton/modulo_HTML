// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM completamente cargado");

  // FORMULARIO DE REGISTRO

  const formulario = document.querySelector("form");

  if (formulario) {
    // Evento de envío del formulario
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevenir el envío real del formulario

      console.log("\nFORMULARIO ENVIADO");

      // Obtener los valores de los campos
      const nombre = formulario.querySelector('input[type="text"]').value;
      const email = formulario.querySelector('input[type="email"]').value;
      const nivel = formulario.querySelector("select").value;
      const comentarios = formulario.querySelector("textarea").value;

      // Loguear los datos del formulario
      console.log("Nombre:", nombre || "(vacío)");
      console.log("Email:", email || "(vacío)");
      console.log("Nivel:", nivel);
      console.log("Comentarios:", comentarios || "(vacío)");
    });

    // Evento de reseteo del formulario
    formulario.addEventListener("reset", function () {
      console.log("\nFORMULARIO LIMPIADO");
      console.log("Todos los campos han sido reseteados");
    });
  }

  // BOTONES "VER DETALLES" DE LOS MÓDULOS

  const botonesModulos = document.querySelectorAll(".module .btn-info");

  botonesModulos.forEach(function (boton, index) {
    boton.addEventListener("click", function () {
      const modulo = boton.closest(".module");
      const tituloModulo = modulo.querySelector("h3").textContent;

      console.log("\nMÓDULO SELECCIONADO");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("Módulo:", tituloModulo);
      console.log("Número:", index + 1);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    });
  });

  // BOTONES DE ACCIÓN PRINCIPAL

  const botones = document.querySelectorAll(".action-section button");

  botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const textoBoton = boton.textContent.trim();

      console.log("\nACCIÓN PRINCIPAL");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("Botón presionado:", textoBoton);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    });
  });

  // BOTONES DEL PIE DE PÁGINA

  const botonesFooter = document.querySelectorAll(".footer-links .link-btn");

  botonesFooter.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const textoBoton = boton.textContent.trim();

      console.log("\nENLACE DEL PIE DE PÁGINA");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("Enlace seleccionado:", textoBoton);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    });
  });

  // EVENTOS DE LAS TARJETAS DE CARACTERÍSTICAS

  const tarjetasCaracteristicas = document.querySelectorAll(".feature-card");

  tarjetasCaracteristicas.forEach(function (tarjeta, index) {
    tarjeta.addEventListener("click", function () {
      const titulo = tarjeta.querySelector("h4").textContent;
      const descripcion = tarjeta.querySelector("p").textContent;

      console.log("\nCARACTERÍSTICA SELECCIONADA");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("Título:", titulo);
      console.log("Descripción:", descripcion);
      console.log("Índice:", index + 1);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    });
  });
});
