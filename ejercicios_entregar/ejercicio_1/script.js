const input = document.getElementById("textoUsuario");
const resultado = document.getElementById("resultado");

input.addEventListener("input", function () {
  resultado.textContent = input.value;
});
