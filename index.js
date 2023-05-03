let min = 1;
let max = 100;
let guess;

function comenzarJuego() {
  guess = Math.floor((min + max) / 2);
  let respuesta = prompt(`Tu número es el ${guess}?`);
  opcionRespuesta(respuesta);
}

function opcionRespuesta(respuesta) {
  if (respuesta.toLowerCase() === "si") {
    prompt("Me la dejaste fácil!");
  } else if (respuesta.toLowerCase() === "mayor") {
    min = guess + 1;
    guess = Math.floor((min + max) / 2);
    let respuesta = prompt(`Tu número es el ${guess}?`);
    opcionRespuesta(respuesta);
  } else if (respuesta.toLowerCase() === "menor") {
    max = guess - 1;
    guess = Math.floor((min + max) / 2);
    let respuesta = prompt(`Tu número es el ${guess}?`);
    opcionRespuesta(respuesta);
  }
}
